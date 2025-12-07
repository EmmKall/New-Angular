import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-TopMenu',
  templateUrl: './TopMenu.component.html',
  styleUrls: ['./TopMenu.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
