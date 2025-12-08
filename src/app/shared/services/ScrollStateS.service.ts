import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GifsSState {

  /* Signal */
  trendingScrollState = signal({
    treading: 0,
  });

  /* Record */
  pagesScrollState: Record<string, number> = {};

  updatePagesScrolState(page: string, value: number): void {
    this.pagesScrollState[page] = value;
  }

  getPageScrollState(page: string): number {
    return this.pagesScrollState[page] ?? 0;
  }

}
