import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-front-navbar',
  templateUrl: './front-navbar.component.html',
  styleUrls: ['./front-navbar.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive,
  ]
})
export class FrontNavbarComponent implements OnInit {

  routes = [
    { path: '/gender/men', title: 'Men' },
    { path: '/gender/women', title: 'Women' },
    { path: '/gender/kids', title: 'Kids' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
