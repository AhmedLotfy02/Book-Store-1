import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { OverallService } from '../overall.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  DarkState = false;
  falsePass = false;
  selected = ' ';
  selectionAlert = false;
  isAuthenticated = false;
  startingSnack = false;
  private authListenerSubs!: Subscription;
  ToggleDark() {
    this.DarkState = !this.DarkState;
  }
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    } else if (this.selected === ' ') {
      this.selectionAlert = true;
      return;
    }
    console.log(form.value);

    console.log(this.selected);
    this.authService.createUser(
      form.value.email,
      form.value.password,
      form.value.username,
      form.value.image,
      form.value.mobile,
      this.selected
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  gotoStore() {
    this.router.navigate(['/mainstore']);
  }
  logout() {
    this.authService.logout();
  }

  constructor(
    private service: OverallService,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authListenerSubs = this.authService.getTestData().subscribe((data) => {
      this.startingSnack = data.failed;
      if (this.startingSnack) {
        this.openSnackBar('SignUp Failed', 'Close');
      }
    });
    this.isAuthenticated = this.authService.getisAuth();

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isauthenticated) => {
        this.isAuthenticated = isauthenticated;
      });
  }
}
