import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  DarkState = false;
  falsePass = false;
  username!: string;
  email!: string;
  password!: string;
  confirmpassword!: string;
  ToggleDark() {
    this.DarkState = !this.DarkState;
  }
  onSignup() {
    if (this.password !== this.confirmpassword) {
      this.falsePass = true;
    } else {
      this.service.LoginUser(
        this.username,
        this.password,
        false,
        this.email,
        this.confirmpassword
      );
    }
    // this.service.AddUser(form.value.username,form.value.password,form.value.confirmpassword);
  }
  constructor(private service: OverallService) {}

  ngOnInit(): void {}
}
