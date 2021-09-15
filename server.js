const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
const { body, validationResult } = require("express-validator");
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const { title } = require("process");
mongoose.connect("mongodb://localhost/DataBase3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
mongoose.set("useFindAndModify", false);

const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const AuthCheck = require("../Book-Store-1/middleware/auth-check");
db.on("error", function(err) {
    console.log(err);
});

db.on("open", function() {
    console.log("Connection established ...");
    app.listen(3000, function() {
        console.log("Server is running ...");
    });
});
const BookSchema = new mongoose.Schema({
    Title: String,
    Author: String,
    Cover: String,
    Price: Number,
    Stock: Number,
});

const Book = mongoose.model("Book", BookSchema);
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/users", (req, res, next) => {
    console.log(req.body);
    console.log(req.body.email);

    UserTest.findOne({ email: req.body.email }, function(err, doc) {
        res.status(201).json({
            message: "Done",
            user: doc,
        });
        console.log(doc);
    });
});

app.post("/adDUsers", function(req, res) {
    console.log(req.body);
});

app.get("/api/books", function(req, res) {
    Book.find(function(err, bos) {
        res.send(bos);
    });
});

app.post("/add", function(req, res) {
    console.log(req.body);
    const NewBook = new Book({
        Title: req.body.Title,
        Author: req.body.Author,
        Cover: req.body.Cover,
        Price: req.body.Price,
        Stock: req.body.Stock,
    });
    NewBook.save();
});

app.get("/api/search/:title", AuthCheck, (req, res, next) => {
    Book.findOne({ Title: req.params.title }, function(err, doc) {
        res.status(201).json({
            message: "fetched",
            book: doc,
        });
    });
});

app.post("/api/addingbooks", AuthCheck, (req, res, next) => {
    const book1 = req.body[0];
    const user1 = req.body[1];
    console.log(user1);
    console.log(book1);
    stockupdated = book1.Stock - 1;
    console.log(stockupdated);

    Book.findOneAndUpdate({ _id: book1._id }, { $set: { Stock: book1.Stock - 1 } }, { new: true },
        (err, doc) => {
            if (err) {
                console.log("error happened while updating");
            } else {
                // console.log(doc);
            }
        }
    );
    var x = false;
    for (var i = 0; i < user1.books.length; i++) {
        if (user1.books[i].Title === book1.Title) {
            x = true;
            console.log("found");
        }
    }
    if (x === true) {
        for (var i = 0; i < user1.books.length; i++) {
            if (user1.books[i].Title === book1.Title) {
                console.log(user1.books[i].Stock);
                user1.books[i].Stock = user1.books[i].Stock + 1;
                console.log(user1.books[i].Stock);
            }
        }
    } else {
        book1.Stock = 1;
        user1.books.push(book1);
        console.log("Not Found");
    }
    UserTest.findOneAndUpdate({ _id: user1._id }, { $set: { books: user1.books } }, { new: true },
        (err, doc) => {
            if (err) {
                console.log("error happened in adding book");
            } else {
                console.log("book added to user");
            }
        }
    );
    return res.status(200).json({
        user: user1,
    });
});

app.post("/api/addingFavbooks", AuthCheck, (req, res, next) => {
    const book1 = req.body[0];
    const user1 = req.body[1];
    console.log(user1);
    console.log(book1);

    var x = false;
    for (var i = 0; i < user1.books.length; i++) {
        if (user1.favorites_list[i].Title === book1.Title) {
            x = true;
            console.log("found");
        }
    }
    if (x === false) {
        book1.Stock = 1;
        user1.favorites_list.push(book1);
        console.log("Not Found");
    }
    UserTest.findOneAndUpdate({ _id: user1._id }, { $set: { favorites_list: user1.favorites_list } }, { new: true },
        (err, doc) => {
            if (err) {
                console.log("error happened in adding book");
            } else {
                console.log("Favbook added to user");
            }
        }
    );
    return res.status(200).json({
        user: user1,
    });
});
app.post("/api/getuser", (req, res, next) => {
    User.findOne({ username: req.body.username }, function(err, doc) {
        res.status(201).json({
            message: "Done",
            User: doc,
        });
        console.log(doc);
    });
});

// app.post("/api/getcurrentUser", (req, res, next) => {});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String, required: true },

    books: [],
    favorites_list: [],
});
userSchema.plugin(uniqueValidator);
const UserTest = mongoose.model("UserTest", userSchema);
app.post("/createuserByAdmin", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(function(hash) {
        const user = new UserTest({
            email: req.body.email,
            password: hash,
            books: [],
            favorites_list: [],
        });
        user
            .save()
            .then((result) => {
                res.status(201).json({
                    message: "user created",
                    result: result,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message: "error found",
                    error: err,
                });
            });
    });
});
app.post("/signuptest", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(function(hash) {
        const user = new UserTest({
            email: req.body.email,
            password: hash,
            username: req.body.username,
            image: req.body.image,
            books: [],
            favorites_list: [],
        });
        user
            .save()
            .then((result) => {
                res.status(201).json({
                    message: "user created",
                    result: result,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    error: err,
                });
            });
    });
});
app.post("/updateUserByAdmin", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(function(hash) {
        UserTest.findOneAndUpdate({ email: req.body.email }, { $set: { password: hash } }, { new: true },
            (err, doc) => {
                if (doc) {
                    res.status(200).json({
                        message: "User Updated",
                        newUser: doc,
                    });
                } else {
                    res.status(501).json({
                        error: err,
                    });
                    console.log("error happened in updating user");
                }
            }
        );
    });
});
app.post("/updateBookByAdmin", (req, res, next) => {
    Book.findOneAndUpdate({ Title: req.body.Title }, {
            $set: {
                Author: req.body.Author,
                Price: req.body.Price,
                Cover: req.body.Cover,
                Stock: req.body.Stock,
            },
        }, { new: true },
        (err, doc) => {
            if (doc) {
                res.status(200).json({
                    message: "Book Updated",
                    updatedBook: doc,
                });
            } else {
                res.status(501).json({
                    error: err,
                });
                console.log("error happened in updating book");
            }
        }
    );
});
app.post("/deleteuserByAdmin", (req, res, next) => {
    UserTest.findOneAndDelete({ email: req.body.email }, (err, doc) => {
        if (doc) {
            res.status(201).json({
                message: "Account Deleted Successfully",
                deletedUser: doc,
            });
        } else {
            res.status(500).json({
                message: "Error Happened",
                error: err,
            });
        }
    });
});
app.post("/deleteBookByAdmin", (req, res, next) => {
    Book.findOneAndDelete({ Title: req.body.Title }, (err, doc) => {
        if (doc) {
            res.status(201).json({
                message: "Book Deleted Successfully",
                deletedBook: doc,
            });
        } else {
            res.status(500).json({
                message: "Error Happened",
                error: err,
            });
        }
    });
});
app.post("/logintest", (req, res, next) => {
    let fetchedUser;
    UserTest.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth Failed",
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then((result) => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth Failed",
                });
            }
            const token = jwt.sign({ email: fetchedUser.email, UserId: fetchedUser._id },
                "this_should_be_very_long", { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                user: fetchedUser,
            });
        })
        .catch((err) => {
            return res.status(401).json({
                message: "Auth Failed",
            });
        });
});

app.get("/testtoken", AuthCheck, (req, res, next) => {
    console.log("intokentest");
    res.status(200).json({
        message: "Auth Done",
    });
});
app.post("/changepassword", (req, res, next) => {
    console.log(req.body);
    console.log(req.body.user._id);
    bcrypt.hash(req.body.newpassword, 10).then(function(hash) {
        UserTest.findOneAndUpdate({ _id: req.body.user._id }, { $set: { password: hash } }, { new: true },
            (err, doc) => {
                if (err) {
                    return res.status(401).json({
                        message: "Failed to change password",
                    });
                } else {
                    res.status(200).json({
                        message: "Changed Sucessfully",
                        user: doc,
                    });
                }
            }
        );
    });
});
app.post("/testemail", (req, res, next) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "ahmadlotfygamersfield@gmail.com",
            pass: "Allahakbar4444",
        },
    });

    let mailOptions = {
        from: '"ahmed Lotfy" <ahmadlotfygamersfield@gmail.com>',
        to: "sarahmohamedahmedlotfy2@gmail.com",
        subject: "hi sara if this email has reached you that means that it worked!!! ✔",
        html: "<body><p>Have a Good Day الحمدلله        </p></body>",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message %s sent: %s", info.messageId, info.response);
    });
    res.status(201).json({
        message: "email sent",
    });
});