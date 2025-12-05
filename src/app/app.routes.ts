import { Routes } from '@angular/router';
import { App } from './app';

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
  { path: '', component: App, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
