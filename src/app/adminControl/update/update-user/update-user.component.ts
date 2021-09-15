import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  constructor(private authService: AuthService) {}
  updated = false;
  updatedlistener!: Subscription;
  updatedErrorlistener!: Subscription;
  error = false;
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
    console.log(form.value);
    // this.authService.updateUserbyAdmin(form.value.email, form.value.pass);
  }
}
