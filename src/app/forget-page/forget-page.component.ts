import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.component.html',
  styleUrls: ['./forget-page.component.css'],
})
export class ForgetPageComponent implements OnInit {
  listener!: Subscription;
  sent = false;
  error = false;
  constructor(private authService: AuthService) {}
  forget(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.forget(form.value.email);
  }
  ngOnInit(): void {
    this.listener = this.authService.getEmailListener().subscribe((result) => {
      if (result) {
        this.sent = true;
        this.error = false;
      } else {
        this.error = true;
        this.sent = false;
      }
    });
  }
}
