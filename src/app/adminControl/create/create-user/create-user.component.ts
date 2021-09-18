import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(private authService: AuthService) {}
  created = false;
  creationerror = false;
  private creationlistener!: Subscription;
  private creationerrorlistener!: Subscription;
  selected = ' ';
  selectionAlert = false;

  ngOnInit(): void {
    this.created = this.authService.isCreated;
    this.creationerror = this.authService.creationerror;
    this.creationerrorlistener = this.authService
      .getCreationErrorListener()
      .subscribe((err) => {
        this.creationerror = err;
      });
    this.creationlistener = this.authService
      .getCreationListener()
      .subscribe((iscreated) => {
        this.created = iscreated;
      });
  }
  create(form: NgForm) {
    if (form.invalid) {
      return;
    } else if (this.selected === ' ') {
      this.selectionAlert = true;
      return;
    }
    // }
    console.log(form.value);
    console.log(this.selected);
    this.authService.createUserByAdmin(
      form.value.email,
      form.value.pass,
      form.value.username,
      form.value.image,
      form.value.mobile,
      this.selected
    );
  }
}
