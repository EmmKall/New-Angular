import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  imports: [
    RouterModule,
    RouterOutlet,
    SideMenuComponent,
  ]
})
export default class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
