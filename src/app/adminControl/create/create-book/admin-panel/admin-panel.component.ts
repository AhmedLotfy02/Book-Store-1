import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BOOK } from '../../../../Book-Model';
import { OverallService } from '../../../../overall.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  constructor(private service: OverallService) {}
  book: BOOK = {
    Title: '',
    Price: 0,
    Author: '',
    Cover: '',
    Stock: 0,
  };

  Title!: string;
  Cover!: string;
  price!: number;
  Author!: string;
  Stock!: number;
  ngOnInit(): void {}
  AdminAdding() {
    this.book.Title = this.Title;
    this.book.Cover = this.Cover;
    this.book.Price = this.price;
    this.book.Author = this.Author;
    this.book.Stock = this.Stock;
    console.log(this.book);
    this.service.sendData(
      this.book.Title,
      this.book.Price,
      this.book.Cover,
      this.book.Author,
      this.book.Stock
    );
  }
}
