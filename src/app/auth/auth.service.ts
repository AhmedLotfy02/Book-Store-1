import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BOOK } from '../Book-Model';
import { AuthData } from './auth-data-model';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private token!: string;
  private userEmail!: string;
  private user!: AuthData;
  private authStatusListener = new Subject<boolean>();
  isAuthenticated = false;
  private creationListener = new Subject<boolean>();
  isCreated = false;
  private creationError = new Subject<boolean>();
  creationerror = false;
  private updationListener = new Subject<boolean>();
  isUpdated = false;
  private updationError = new Subject<boolean>();
  updationerror = false;
  private deletionListener = new Subject<boolean>();
  isdeleted = false;
  private deletionError = new Subject<boolean>();
  deletionerror = false;
  private tokenTimer: any;
  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return this.token;
  }
  getisAuth() {
    return this.isAuthenticated;
  }
  getUser() {
    return this.user;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getCreationListener() {
    return this.creationListener.asObservable();
  }
  getCreationErrorListener() {
    return this.creationError.asObservable();
  }

  getUpdationListener() {
    return this.updationListener.asObservable();
  }
  getUpdationErrorListener() {
    return this.updationError.asObservable();
  }

  getDeletionListener() {
    return this.deletionListener.asObservable();
  }
  getDeletionErrorListener() {
    return this.deletionError.asObservable();
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      return;
    }
    this.http
      .post<{ message: string; user: AuthData }>(
        'http://localhost:3000/api/users',
        { email: authInformation.email }
      )
      .subscribe((responsedata: any) => {
        this.user = responsedata.user;
      });
    const now = new Date();
    const expiresIn = authInformation!.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      if (authInformation.email) {
        this.userEmail = authInformation.email;
      }
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  createUser(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      books: [],
      favorites_list: [],
    };
    this.http
      .post('http://localhost:3000/signuptest', authData)
      .subscribe((response) => {
        console.log(response);
      });
  }
  createUserByAdmin(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      books: [],
      favorites_list: [],
    };
    this.http
      .post<{ message: string }>(
        'http://localhost:3000/createuserByAdmin',
        authData
      )
      .subscribe(
        (response) => {
          this.isCreated = true;
          this.creationerror = false;
          this.creationListener.next(true);

          this.creationError.next(false);
          console.log(response);
        },
        (error) => {
          this.creationerror = true;
          this.isCreated = false;
          this.creationError.next(true);

          this.creationListener.next(false);
          console.log(error);
        }
      );
  }
  updateUserbyAdmin(email: string, newpassword: string) {
    const authData: AuthData = {
      email: email,
      password: newpassword,
      books: [],
      favorites_list: [],
    };
    this.http
      .post('http://localhost:3000/updateUserByAdmin', authData)
      .subscribe(
        (response) => {
          this.isUpdated = true;
          this.updationerror = false;

          this.updationListener.next(true);
          this.updationError.next(false);
          console.log(response);
        },
        (error) => {
          this.isUpdated = false;

          this.updationerror = true;
          this.updationListener.next(false);

          this.updationError.next(true);
          console.log(error);
        }
      );
  }
  updateBookByAdmin(
    author: string,
    title: string,
    image: string,
    price: number,
    stock: number
  ) {
    const book: BOOK = {
      Title: title,
      Author: author,
      Cover: image,
      Price: price,
      Stock: stock,
    };
    console.log(book);
    this.http.post('http://localhost:3000/updateBookByAdmin', book).subscribe(
      (response) => {
        this.isUpdated = true;
        this.updationerror = false;

        this.updationListener.next(true);
        this.updationError.next(false);
        console.log(response);
      },
      (error) => {
        this.isUpdated = false;

        this.updationerror = true;
        this.updationListener.next(false);

        this.updationError.next(true);
        console.log(error);
      }
    );
  }
  deleteUserByAdmin(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      books: [],
      favorites_list: [],
    };

    this.http
      .post<{ message: string }>(
        'http://localhost:3000/deleteuserByAdmin',
        authData
      )
      .subscribe(
        (response) => {
          this.isdeleted = true;
          this.deletionerror = false;
          this.deletionListener.next(true);

          this.deletionError.next(false);
          console.log(response);
        },
        (error) => {
          this.deletionerror = true;
          this.isdeleted = false;
          this.deletionError.next(true);

          this.deletionListener.next(false);
          console.log(error);
        }
      );
  }
  deleteBookByAdmin(title: string) {
    const book = {
      Title: title,
    };

    this.http
      .post<{ message: string }>(
        'http://localhost:3000/deleteBookByAdmin',
        book
      )
      .subscribe(
        (response) => {
          this.isdeleted = true;
          this.deletionerror = false;
          this.deletionListener.next(true);

          this.deletionError.next(false);
          console.log(response);
        },
        (error) => {
          this.deletionerror = true;
          this.isdeleted = false;
          this.deletionError.next(true);

          this.deletionListener.next(false);
          console.log(error);
        }
      );
  }
  login(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      books: [],
      favorites_list: [],
    };
    this.http
      .post<{ token: string; expiresIn: number; user: AuthData }>(
        'http://localhost:3000/logintest',
        authData
      )
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        console.log(response);
        if (token) {
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          const expiresInDuration = response.expiresIn;
          console.log(expiresInDuration);
          const user = response.user;
          this.user = user;
          // this.userEmail = email;
          console.log(user.email);
          console.log(this.user);
          this.setAuthTimer(expiresInDuration);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate, user.email);
          this.router.navigate(['/mainstore']);
        }
      });
  }
  test() {
    this.http.get('http://localhost:3000/testtoken').subscribe((response) => {
      console.log(response);
    });
  }

  addBooksToUser(book: BOOK) {
    this.http
      .post<{ user: AuthData }>('http://localhost:3000/api/addingbooks', [
        book,
        this.user,
      ])
      .subscribe((response) => {
        this.user = response.user;
      });
  }

  addFavBooksToUser(book: BOOK) {
    this.http
      .post<{ user: AuthData }>('http://localhost:3000/api/addingFavbooks', [
        book,
        this.user,
      ])
      .subscribe((response) => {
        this.user = response.user;
      });
  }

  testmail() {
    this.http
      .post('http://localhost:3000/testemail', 'hi')
      .subscribe((response) => {
        console.log(response);
      });
  }

  changePassword(password: string) {
    console.log(password);
    console.log(this.user);
    const data = {
      newpassword: password,
      user: this.user,
    };
    this.http
      .post<{ message: string; user: AuthData }>(
        'http://localhost:3000/changepassword',
        data
      )
      .subscribe((response) => {
        console.log(response);
        this.user = response.user;
      });
  }
  logout() {
    this.token = '';
    this.authStatusListener.next(false);
    this.isAuthenticated = false;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }
  private setAuthTimer(duraion: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duraion * 1000);
  }
  private saveAuthData(token: string, expirtationDate: Date, email: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirtationDate.toISOString());
    localStorage.setItem('email', email);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('email');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const email = localStorage.getItem('email');
    if (!token || !expirationDate) {
      return;
    } else {
      return {
        token: token,
        expirationDate: new Date(expirationDate),
        email: email,
      };
    }
  }
}
