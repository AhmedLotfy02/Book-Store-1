import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  DarkState=false;
ToggleDark(){
  this.DarkState=!this.DarkState;
}
onSignup(form:NgForm){
  this.service.AddUser(form.value.username,form.value.password,form.value.confirmpassword);
}
  constructor(private service:OverallService) { }

  ngOnInit(): void {
  }

}
