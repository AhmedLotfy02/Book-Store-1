import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      render({
        id: '#myPaypalButton',
        currency: 'USD',
        value: '300.0',
        onApprove: (details) => {
          alert('Transaction Successfull');
        },
      });
    }, 1000);
  }
}
