import { Routes } from '@angular/router';
import { App } from './app';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

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
  { path: 'about', component: AboutPageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
