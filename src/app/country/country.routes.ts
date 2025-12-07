import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import ByCapitalPageComponent from './pages/ByCapitalPage/ByCapitalPage.component';
import { ByCountryPageComponent } from './pages/ByCountryPage/ByCountryPage.component';
import { ByRegionPageComponent } from './pages/ByRegionPage/ByRegionPage.component';
import { ByTermPage } from './pages/by-term-page/by-term-page';

export const CountryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by/:code',
        component: ByTermPage,
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', },
];

export default CountryRoutes;
