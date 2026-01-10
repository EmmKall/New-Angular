import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import {Role, UserI } from '../interfaces/UserResponseI';
import { rxResource } from '@angular/core/rxjs-interop';
import { UserResponseI } from '@auth/interfaces/AuthResponse';

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

export interface loginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);

  url: string = `${environment.apiTeloShop}auth/`;

  constructor() { }

  checkStatusResource = rxResource({
    stream:() => this.checkStatus(),
    defaultValue: false,
  });

  /* HttpCliente */
  /* login(data: loginData) {
    return this.http.post(`${this.url}login`, data);
  } */
 /*
  this.userService.getUsers().subscribe(users => {
    this.users = users;
  });
  */


  /* Observable */
  /* login(): Observable<any> {
    return this.http.get(`${this.url}login`);
  } */
  /*
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  */


  /* Observable signal */
  /* login$ = this.http.get<any>(`${this.url}login`); */
  /* users = toSignal(this.userService.users$, { initialValue: [] }); */

  /* Signals */
  private _authStatus = signal<AuthStatus>('checking');
  private _user  = signal<UserI | null>(null);
  private _token = signal<string|null>(localStorage.getItem('token'));

  authStatus = computed<AuthStatus>(() => {
    if(this._authStatus() === 'checking') return this._authStatus();
    if(this._user()) return 'authenticated';
    return 'not-authenticated';
  });

  userRoles = computed(() => {
    return this.user()?.roles ?? [];
  });
  isAdmin = computed( () => this._user()?.roles.includes(Role.Admin));

  user = computed<any>(()=> this._user());
  token = computed<any>(()=> this._token());

  login(data: loginData): Observable<string[]> {
    const url: string = `${this.url}login`;
    return this.http.post<any>(url, data)
    .pipe(
      tap( resp => {
        this.handleAuthSuccess(resp);
      }),
      map( () => []),
      catchError( (err:any) => {
        const {error: {message} } = err;
        this.logout();
        return of(message);
      })
    )
  }

  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if(!token) {
      this._authStatus.set('not-authenticated');
      return of(false);
    }
    const url: string = `${this.url}check-status`;
    this._authStatus.set('checking');
    return this.http.get<any>(url, {
      // headers: { 'Authorization': `Bearer ${token}` }
    })
    .pipe(
      tap( resp => {
        this.handleAuthSuccess(resp);
      }),
      map( () => true),
      catchError( (err:any) => {
        this.logout();
        return of(false);
      })
    )
  }

  logout(): void {
    this._authStatus.set('not-authenticated');
    this._user.set(null);
    this._token.set(null);
    localStorage.removeItem('token');
  }

  private handleAuthSuccess(resp: UserResponseI) {
    const { user, token } = resp;
    this._authStatus.set('authenticated');
    this._user.set(user);
    this._token.set(token);
    localStorage.setItem('token', token);
  }

  private handleAuthError(error: any): Observable<boolean> {
    this.logout();
    return of(false);
  }

  register(body: {fullname: string, email: string, password: string}): Observable<string[]> {
    const url: string = `${this.url}register`;
    return this.http.post<any>(url, body)
    .pipe(
      tap( resp => { console.log(resp);
        this.handleAuthSuccess(resp);
      }),
      map( () => []),
      catchError( (err:any) => { console.log(err);
        const {error: {message} } = err;
        this.logout();
        return of(message);
      })
    )
  }

}
