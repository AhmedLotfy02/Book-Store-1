import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OverallService } from '../overall.service';
import { User } from '../User-Model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  DarkState = false;
  Login = false;
  KeepLogin = false;
  ToggleDark() {
    this.DarkState = !this.DarkState;
  }
  user!: User;
  onlogging(form: NgForm) {
    console.log(form.value.username);
    this.Login = this.service.LoginUser(
      form.value.username,
      form.value.password,
      true
    );
    // if(!this.Login){
    //     this.router.navigate(['/signup']);
    // }
    // else{
    //   this.router.navigate(['/mainstore']);

    // }
  }
  constructor(public service: OverallService, private router: Router) {}

  ngOnInit(): void {}
}
