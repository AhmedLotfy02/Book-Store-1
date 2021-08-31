import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BOOK } from '../Book-Model';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-main-store',
  templateUrl: './main-store.component.html',
  styleUrls: ['./main-store.component.css'],
})
export class MainStoreComponent implements OnInit {
  showFiller = false;
  open = true;
  books!: any;
  constructor(private service: OverallService) {
    this.service.getBooks().subscribe((bos) => {
      this.books = bos;
    });
  }
  book!: BOOK;
  ngOnInit(): void {}
}
