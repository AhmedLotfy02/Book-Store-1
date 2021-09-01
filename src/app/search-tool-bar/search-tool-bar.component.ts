import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BOOK } from '../Book-Model';
import { OverallService } from '../overall.service';
import { User } from '../User-Model';

@Component({
  selector: 'app-search-tool-bar',
  templateUrl: './search-tool-bar.component.html',
  styleUrls: ['./search-tool-bar.component.css'],
})
export class SearchToolBarComponent implements OnInit {
  book!: BOOK;
  name = 'asd';
  onSearch(form: NgForm) {
    this.service.Search(form.value.search).subscribe((repsonseData) => {
      console.log(repsonseData);
      this.book = repsonseData.book;
      console.log(this.book);
      this.router.navigate(['/searchresult', { ...this.book }]);
    });
  }
  constructor(private service: OverallService, private router: Router) {}

  ngOnInit(): void {
    this.service.getcurrentUser().subscribe((user: any) => {
      console.log('inmainstore');
      this.name = user;
      console.log(this.name);
      setTimeout(function () {
        console.log('I am the third log after 5 seconds');
      }, 3000);
    });
  }
}
