import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOK } from './Book-Model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverallService {
  book!: BOOK;
  currentLibrary!: BOOK[];

  subject1 = new Subject();

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://localhost:3000/api/books').subscribe((bos: any) => {
      this.currentLibrary = bos;
    });
  }
  getBooks() {
    return this.http.get('http://localhost:3000/api/books');
  }

  Search(title: string) {
    return this.http.get<{ message: string; book: BOOK }>(
      'http://localhost:3000/api/search/' + title
    );
  }
  getResult() {
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
}
