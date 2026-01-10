import { Routes } from '@angular/router';
import { App } from './app';
import { NoAuthenticatedGuard } from '@auth/guards/not-authenticated.guard';
import { isAdminGuard } from '@auth/guards/is-admin.guard';

export const routes: Routes = [
  /* {
    path: 'dashboard',
    //loadComponent: () => import('./gifs/pages/dashboard/dashboard').then( (m) => m.Dashboard ), },
    //loadComponent: () => import('./gifs/pages/dashboard/dashboard'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending/trending'),
      },
    ]
  }, */
  {
    path: 'auth',
    loadChildren: () => import('./auth/Auth.routing'),
    canMatch: [
      NoAuthenticatedGuard,
      () => {
        // console.log('Authenticated');
        return true;
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.routing'),
    canMatch: [
      isAdminGuard,
    ]
  },
  {
    path: '',
    loadChildren: () => import('./store-front/store-front.routing'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
