import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';
import type { GifI, GIFInterface } from '../interfaces/Gif';
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY = 'searchHistory';
const loadFromLocalStorage = () => {
  return localStorage.getItem(GIF_KEY) ? JSON.parse(localStorage.getItem(GIF_KEY)!) : {};
};

@Injectable({
  providedIn: 'root',
})
export class GifsS {

  private _http:HttpClient = inject(HttpClient);

  trendingGifs = signal<GifI[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  searchHistory = signal<Record<string, GifI[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed( () => Object.keys(this.searchHistory()));

  loadTrendingGifs( q: string = '' ): void {
    const url = `${environment.apiUrlGiphy}/gifs/trending`;
    this._http.get<GIFInterface>(url, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: '25',
        rating: 'g',
        q,
      },
    }).subscribe(res => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
      this.trendingGifs.update(() => gifs);
      this.trendingGifsLoading.set(false);
    });

  }

  loadSearchGifs( query: string = '' ): Observable<GifI[]> {
    const url = `${environment.apiUrlGiphy}/gifs/search`;
    return this._http.get<GIFInterface>(url, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: '25',
        rating: 'g',
        q: query,
      },
    }).pipe(
      //tap( res => console.log(res.data) ),
      map( ({data}) => GifMapper.mapGiphyItemsToGifArray(data) ),
      //Historial
      tap( items => {
        this.searchHistory.update( (history) => ({
            ...history,
            [query.toLowerCase()]: items
        }));
        //this.saveGifToLocalStorage;
      } ),
      /* map( ({data}) => data ),
      map( data => GifMapper.mapGiphyItemsToGifArray(data) ), */
      //tap( res => console.log(res) ),
    );

  }

  getHistoryGif(query: string): GifI[] {
    return this.searchHistory()[query.toLowerCase()] ?? [];
  }

  saveGifToLocalStorage= effect(() => {
    localStorage.setItem(GIF_KEY, JSON.stringify( this.searchHistory() ) );
  });

}
