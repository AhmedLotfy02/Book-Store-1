import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User-Model';
import { BOOK } from './Book-Model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OverallService {
  login = false;
  book!: BOOK;
  constructor(private http: HttpClient, private router: Router) {}
  LoginUser(username: string, password: string) {
    const user: User = { id: '', username: username, password: password };
    this.http
      .post<{ message: string; postId: boolean }>(
        'http://localhost:3000/api/users',
        user
      )
      .subscribe((responseData) => {
        const id = responseData.postId;
        console.log(id);
        this.login = id;
        console.log(this.login);
      });
    console.log(this.login);
    return this.login;
  }
  getLogin() {
    return this.login;
  }
  getBooks() {
    return this.http.get('http://localhost:3000/api/books');
  }
  AddUser(username: string, password: string, confirmpass: string) {
    const newUser = {
      username: username,
      password: password,
      confirmpass: confirmpass,
    };

    this.http.post('http://localhost:3000/api/users', newUser);
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
  sendData(title: string, price: number, cover: string, author: string) {
    const book: BOOK = {
      Title: title,
      Author: author,
      Price: price,
      Cover: cover,
    };
    console.log(book);
    return this.http.post('http://localhost:3000/add', book).subscribe();
  }
}
