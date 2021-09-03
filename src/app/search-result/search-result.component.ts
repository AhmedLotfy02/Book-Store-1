import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BOOK } from '../Book-Model';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  book!: BOOK;
  constructor(private service: OverallService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const data: any = this.route.snapshot.paramMap;
    const book: any = {
      Title: data.get('Title'),
      Author: data.get('Author'),
      Cover: data.get('Cover'),
      Price: data.get('Price'),
    };
    console.log(book);
    this.book = book;
  }
  addToCart(book: BOOK) {
    this.service.addBooksToUser(book);
  }
}
