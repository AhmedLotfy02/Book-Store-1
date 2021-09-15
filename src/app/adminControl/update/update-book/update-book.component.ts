import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  updated = false;
  updatedlistener!: Subscription;
  updatedErrorlistener!: Subscription;
  error = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.updated = this.authService.isUpdated;
    this.updatedlistener = this.authService
      .getUpdationListener()
      .subscribe((iscreated) => {
        this.updated = iscreated;
      });
    this.updatedErrorlistener = this.authService
      .getUpdationErrorListener()
      .subscribe((error) => {
        this.error = error;
      });
    this.error = this.authService.updationerror;
  }
  update(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.updateBookByAdmin(
      form.value.author,
      form.value.title,
      form.value.image,
      form.value.price,
      form.value.stock
    );
  }
}
