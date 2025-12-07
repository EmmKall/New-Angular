import { Routes } from '@angular/router';
import { App } from './app';
import { HomePageComponent } from './country/pages/HomePage/HomePage.component';

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
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
