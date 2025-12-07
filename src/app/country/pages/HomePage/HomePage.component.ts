 import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css'],
    imports: [
      RouterLink,
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
