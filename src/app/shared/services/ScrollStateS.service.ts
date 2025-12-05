import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GifsSState {

  trendingScrollState = signal({
    treading: 0,
  });

}
