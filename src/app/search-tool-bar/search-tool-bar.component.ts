import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BOOK } from '../Book-Model';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-search-tool-bar',
  templateUrl: './search-tool-bar.component.html',
  styleUrls: ['./search-tool-bar.component.css'],
})
export class SearchToolBarComponent implements OnInit {
  book!: BOOK;
  onSearch(form: NgForm) {
    this.service.Search(form.value.search).subscribe((repsonseData) => {
      console.log(repsonseData);
      this.book = repsonseData.book;
      console.log(this.book);
      this.router.navigate(['/searchresult', { ...this.book }]);
    });
  }
  constructor(private service: OverallService, private router: Router) {}

  ngOnInit(): void {}
}
