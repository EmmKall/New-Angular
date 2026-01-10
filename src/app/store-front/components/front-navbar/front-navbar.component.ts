import { JsonPipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Role, UserI } from '@auth/interfaces/UserResponseI';
import { AuthService } from '@auth/services/Auth.service';

@Component({
  selector: 'app-front-navbar',
  templateUrl: './front-navbar.component.html',
  styleUrls: ['./front-navbar.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive,
    JsonPipe,
  ]
})
export class FrontNavbarComponent implements OnInit {

  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);

  routes = [
    { path: '/gender/men', title: 'Men' },
    { path: '/gender/women', title: 'Women' },
    { path: '/gender/kids', title: 'Kids' },
  ];

  user: UserI|null = this.authService.user();

  btnText = computed<string>( () =>  this.authService.authStatus() === 'authenticated' ? 'Logout' : 'Login' );
  isAdmin = computed<boolean>( () => this.user?.roles.includes(Role.Admin)|| false );

  constructor() { }

  ngOnInit() { }

  handleBtn(): void {
    if(this.authService.authStatus() === 'authenticated') {
      this.authService.logout();
      return;
    }

    this.router.navigate(['/auth/login']);

  }

}
