import { Routes } from '@angular/router';
import { App } from './app';
import { ChangeDetectionComponent } from './dashboard/pages/change-detection/change-detection.component';

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
    path: 'dashboard',
    // loadComponent: () => import{'./dashboard/Dashboard.component'}.then( (c) => c.Dashboard )
    loadComponent: () => import('./dashboard/Dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component').then( (c) => c.ChangeDetectionComponent ),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component').then( (c) => c.ControlFlowComponent ),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component').then( (c) => c.DeferOptionsComponent ),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
      },
      {
        path: 'view-transition-second',
        title: 'View Transition Second',
        loadComponent: () => import('./dashboard/pages/view-transition-second/view-transition-second.component'),
      },
    ]
  },
  // { path: '', component: App, pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
