import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { UsersI, UsersResponseI } from '@interfaces/users-responseI';
import { delay, Observable } from 'rxjs';

interface State {
  users: UsersI[],
  loading: boolean,
  error: any
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http: HttpClient = inject(HttpClient);

  url: string = `https://reqres.in/api/users`;

  #state = signal<State>({
    users: [],
    loading: true,
    error: null
  });

  users = computed( () => this.#state().users );

  constructor() {
    console.log('Loading data');
    this.getUsers();
  }

  getUsers() {
    return this._http.get<UsersResponseI>(this.url)
    .pipe(
      delay(1000)
    )
    .subscribe( res => {
      this.#state.set({
        users: res.data,
        loading: false,
        error: null
      });
      console.log(res.data);
    });
  }

  getUserById(id: string) {
    return this._http.get<UsersResponseI>(`${this.url}/${id}`)
    .pipe(
      delay(1000)
    )
    .subscribe( res => {

    })
  }

}

