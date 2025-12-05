import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'dashboard',
    //loadComponent: () => import('./gifs/pages/dashboard/dashboard').then( (m) => m.Dashboard ), },
    loadComponent: () => import('./gifs/pages/dashboard/dashboard'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending/trending'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search')
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/gif-history/gif-history')
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
