import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OverallService } from '../overall.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  DarkState = false;
  Login = false;
  KeepLogin = false;
  isAuthenticated = false;
  private authListenerSubs!: Subscription;
  ToggleDark() {
    this.DarkState = !this.DarkState;
  }
  onlogging(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (
      form.value.email === 'admin@gmail.com' &&
      form.value.password === 'admin'
    ) {
      this.router.navigate(['/admin']);
    } else {
      this.authService.login(form.value.email, form.value.password);
    }
  }
  gotoStore() {
    this.router.navigate(['/mainstore']);
  }
  logout() {
    this.authService.logout();
  }
  constructor(
    public service: OverallService,
    private router: Router,
    private authService: AuthService
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
