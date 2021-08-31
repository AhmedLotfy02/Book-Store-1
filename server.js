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
mongoose.connect("mongodb://localhost/DataBase2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
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
});
const LoginSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const Book = mongoose.model("Book", BookSchema);
const User = mongoose.model("User", LoginSchema);
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/users", (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    console.log(user);
    if (req.body.username == "ahmed") {
        res.status(201).json({
            message: "invalid",
            postId: false,
        });
    } else {
        user.save().then((createdPost) => {
            res.status(201).json({
                message: "Post added successfully",
                postId: true,
            });
        });
    }
});
app.get("/tes", (req, res, next) => {
    res.status(200);
});
app.get("/redirect", (req, res, next) => {
    res.redirect("/signup");
});

// app.get('/', (req, res, next) => {
//         res.send(`
//     <h2>asdas</h2>
//     `)
//     })
// app.post('/api/users',
//     body('username').isAlphanumeric().escape(),
//     body('password').isAlphanumeric().escape().isStrongPassword(),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.send(errors.array());
//         } else {
//             const NewUser = new User({
//                 username: req.body.username,
//                 password: req.body.password
//             })
//             NewUser.save(function(err, result) {
//                 if (err) {
//                     console.log(err)
//                 }

//                 res.redirect('/Admin')
//             })
//         }

//     })

app.get("/api/books", function(req, res) {
    Book.find(function(err, bos) {
        res.send(bos);
    });
});
app.get("/Admin", function(req, res) {
    res.send(
        `
        <form method="POST" action="/add">
        <h2>Enter Title</h2>
            <input type="text" name="field1">
            <h2>Enter Author's Name</h2>
            <input type="text" name="field2">
            <h2>Enter image url</h2>
            <input type="text" name="field3">
            <h2>Enter Book's Price</h2>
            <input type="text" name="field4">
            <button>ADD</button>
        </form>
        
        `
    );
});

app.post("/add", function(req, res) {
    console.log(req.body);
    const NewBook = new Book({
        Title: req.body.Title,
        Author: req.body.Author,
        Cover: req.body.Cover,
        Price: req.body.Price,
    });
    NewBook.save();
});

// app.post('/add',
//     body('field1').isAlphanumeric().escape(),
//     body('field2').isAlphanumeric().escape(),

//     body('field4').isFloat().escape()

//     ,
//     function(req, res) {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.send(errors.array());
//         }
//         const Title1 = req.body.field1;
//         const Author1 = req.body.field2;
//         const Image1 = req.body.field3;
//         const Price1 = req.body.field4;
//         const NewBook = new Book({
//             Title: Title1,
//             Author: Author1,
//             Cover: Image1,
//             Price: Price1
//         })

//         NewBook.save(function(err, result) {
//             if (err) {
//                 console.log(err)
//             }

//             res.redirect('/Admin')
//         })

//     })
app.get("/api/search/:title", (req, res, next) => {
    Book.findOne({ Title: req.params.title }, function(err, doc) {
        res.status(201).json({
            message: "fetched",
            book: doc,
        });
    });
});