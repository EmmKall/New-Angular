import { Routes } from '@angular/router';
import { App } from './app';
import { NoAuthenticatedGuard } from '@auth/guards/not-authenticated.guard';

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
    path: '',
    loadChildren: () => import('./store-front/store-front.routing'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
