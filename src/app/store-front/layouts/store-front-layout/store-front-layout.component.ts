import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
  selector: 'app-store-front-layout',
  templateUrl: './store-front-layout.component.html',
  styleUrls: ['./store-front-layout.component.css'],
  imports: [
    RouterOutlet,
    FrontNavbarComponent,
],
})
export class StoreFrontLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
