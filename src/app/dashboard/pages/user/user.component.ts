import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [
    TitleComponent,
  ]
})
export default class UserComponent implements OnInit {

  private _route = inject(ActivatedRoute);
  private _userService: UsersService = inject(UsersService);

  /* public user = toSignal(
    this._route.params.pipe(
      switchMap( ({ id }) => this._userService.getUserById(params[ id ] )
    )
  ); */

  constructor() { }

  ngOnInit() {
  }

}
