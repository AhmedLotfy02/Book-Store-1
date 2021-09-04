import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User-Model';
import { BOOK } from './Book-Model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverallService {
  login = false;
  book!: BOOK;
  currentLibrary!: BOOK[];
  user!: User;
  currentUser!: User;
  name = ' ';
  subject1 = new Subject();

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://localhost:3000/api/books').subscribe((bos: any) => {
      this.currentLibrary = bos;
    });
  }
  LoginUser(
    username: string,
    password: string,
    lorS: Boolean,
    email: string = '',
    confirmpassword: string = ''
  ) {
    const user: User = {
      id: '',
      username: username,
      password: password,
      books: [],
    };
    this.http
      .post<{ message: string; User: User }>(
        'http://localhost:3000/api/users',
        user
      )
      .subscribe((responseData) => {
        console.log(responseData.User);
        console.log(lorS);

        if (!responseData.User && lorS) {
          console.log('in');
          this.router.navigate(['/signup']);
        } else if (responseData.User && lorS) {
          console.log('User Found in Login');

          setTimeout(() => {
            this.currentUser = responseData.User;
            this.name = this.currentUser.username;
            this.router.navigate(['/loading']);
          }, 2000);
          this.applyingLogin(responseData.User);
        }
        // } else {
        // }
        else if (!responseData.User && !lorS) {
          console.log('inreturn');
          this.AddUser(username, email, password, confirmpassword);
        } else {
        }
      });
    return this.login;
  }
  getLogin() {
    return this.login;
  }
  SendUser(user: User) {
    this.http.post('http://localhost:3000/AdDUsers', user).subscribe();
  }
  getBooks() {
    return this.http.get('http://localhost:3000/api/books');
  }
  AddUser(
    username: string,
    email: string,
    password: string,
    confirmpass: string
  ) {
    const newUser = {
      username: username,
      email: email,
      password: password,
      confirmpass: confirmpass,
    };

    this.http.post('http://localhost:3000/api/addUsers', newUser).subscribe();
    this.router.navigate(['/signupSuc']);
  }
  Search(title: string) {
    return this.http.get<{ message: string; book: BOOK }>(
      'http://localhost:3000/api/search/' + title
    );
  }
  getResult() {
    console.log('getting result');
    return this.book;
  }
  sendData(
    title: string,
    price: number,
    cover: string,
    author: string,
    stock: number
  ) {
    const book: BOOK = {
      Title: title,
      Author: author,
      Price: price,
      Cover: cover,
      Stock: stock,
    };
    console.log(book);
    return this.http.post('http://localhost:3000/add', book).subscribe();
  }

  applyingLogin(newUSer: User) {
    this.currentUser = newUSer;
    this.subject1.next(this.currentUser.username);
  }
  getcurrentUser() {
    return this.subject1.asObservable();
  }
  getUser2() {
    // return this.currentUser.username;
    return this.name;
  }
  addBooksToUser(book: BOOK) {
    console.log(this.currentUser);
    this.http
      .post('http://localhost:3000/api/addingbooks', [book, this.currentUser])
      .subscribe();
    this.http
      .post<{ message: string; User: User }>(
        'http://localhost:3000/api/users',
        this.currentUser
      )
      .subscribe((responsedata: any) => {
        this.currentUser = responsedata.User;
        console.log(this.currentUser);
      });
  }
  getUser3() {
    return this.currentUser;
  }
}
