import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [
    TitleComponent,
    RouterModule,
  ]
})
export default class UsersComponent implements OnInit {

  _usersService:UsersService = inject(UsersService);

  users = this._usersService.users;

  constructor() { }

  ngOnInit() { }

}
