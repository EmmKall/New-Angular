import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '@auth/services/Auth.service';

@Component({
  selector: 'app-admin-dashboard-layout',
  templateUrl: './admin-dashboard-layout.component.html',
  styleUrls: ['./admin-dashboard-layout.component.css'],
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
]
})
export class AdminDashboardLayoutComponent implements OnInit {

  authService: AuthService = inject(AuthService);
  user = computed(() => this.authService.user());
  router: Router = inject(Router);

  constructor() { }

  ngOnInit() { }

  logout(): void { console.log('logout');
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
