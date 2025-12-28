import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive,
  ]
})
export class NavbarComponent implements OnInit {

  routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
