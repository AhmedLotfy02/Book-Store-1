import { Component, OnInit } from '@angular/core';
import { OverallService } from '../overall.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(public service:OverallService) {
   }

  ngOnInit(): void {

  }

}
