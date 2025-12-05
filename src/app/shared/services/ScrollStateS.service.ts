import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GifsSState {

  /* Signal */
  trendingScrollState = signal({
    treading: 0,
  });

  /* Record */
  pagesScrollState: Record<string, number> = {};

}
