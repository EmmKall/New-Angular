import { Component, computed, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifI } from '../../interfaces/Gif';
import { GifsS } from '../../services/gifs-s';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending',
  imports: [
    CommonModule,
    GifList,
  ],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export default class Trending {

  gifsS: GifsS = inject(GifsS);

  trendingGifs = signal<GifI[]>([]);

  gifs = computed(() => this.gifsS.trendingGifs());

  constructor() {
    this.gifsS.loadTrendingGifs();
  }

}
