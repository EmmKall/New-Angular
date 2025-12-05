import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsS } from '../../../services/gifs-s';
import { CommonModule } from '@angular/common';

interface MenuOptions {
  label:    string;
  subLabel: string;
  route:    string;
  icon?:    string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './gifs-side-menu-options.html',
  styleUrl: './gifs-side-menu-options.css',
})
export class GifsSideMenuOptions {

  gifsS: GifsS= inject(GifsS);

  menuOptions: MenuOptions[] = [
    {
      label:    'Trending',
      subLabel: 'Tredings GIFs',
      route:    '/dashboard/trending',
      icon:     'fa-solid fa-chart-line'
    },
    {
      label:    'Search',
      subLabel: 'Find your favorite GIFs',
      route:    '/dashboard/search',
      icon:     'fa-solid fa-magnifying-glass'
    },
  ];


}
