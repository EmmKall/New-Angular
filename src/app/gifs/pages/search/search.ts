import { Component, computed, inject, signal } from '@angular/core';
import { GifsS } from '../../services/gifs-s';
import type { GifI } from '../../interfaces/Gif';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-search',
  imports: [
    GifList,
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export default class Search {

  gifS: GifsS = inject(GifsS);

  gifsList = signal<GifI[]>([]);


  onSearch(query: string) {
    this.gifS.loadSearchGifs(query).subscribe(res => {
      this.gifsList.update(() => res);
    });
  }

}
