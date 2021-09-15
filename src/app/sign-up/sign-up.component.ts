import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  DarkState = false;
  falsePass = false;

  isAuthenticated = false;
  private authListenerSubs!: Subscription;
  ToggleDark() {
    this.DarkState = !this.DarkState;
  }
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(
      form.value.email,
      form.value.password,
      form.value.username,
      form.value.image
    ); // if (
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getisAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isauthenticated) => {
        this.isAuthenticated = isauthenticated;
      });
  }
}
