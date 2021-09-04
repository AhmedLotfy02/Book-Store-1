import { Component, OnInit } from '@angular/core';
import { BOOK } from '../Book-Model';
import { OverallService } from '../overall.service';
import { User } from '../User-Model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  books!: BOOK[];
  price: number = 0;
  constructor(private service: OverallService) {
    setTimeout(() => {
      this.books = this.service.getUser3().books;
      console.log('I am the third log after 2 seconds');
      console.log(this.books);
      for (var i = 0; i < this.books.length; i++) {
        this.price += this.books[i].Price * this.books[i].Stock;
      }
    }, 500);
  }

  ngOnInit(): void {}
}
