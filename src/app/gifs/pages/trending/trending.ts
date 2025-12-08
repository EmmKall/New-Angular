import { AfterViewInit, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifI } from '../../interfaces/Gif';
import { GifsS } from '../../services/gifs-s';
import { CommonModule } from '@angular/common';
import { GifsSState } from 'src/app/shared/services/ScrollStateS.service';

@Component({
  selector: 'app-trending',
  imports: [
    CommonModule,
    GifList,
  ],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export default class Trending implements AfterViewInit {

  gifsS: GifsS = inject(GifsS);
  private gifsSState: GifsSState = inject(GifsSState);

  trendingGifs = signal<GifI[]>([]);

  gifs = computed(() => this.gifsS.trendingGifs());

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  constructor() {
    this.gifsS.loadTrendingGifs();
      }

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    //scrollDiv.scrollTop = this.gifsSState.trendingScrollState().treading;
    scrollDiv.scrollTop = this.gifsSState.pagesScrollState['trending'] ?? this.gifsSState.getPageScrollState('treading');
    //console.log(this.gifsSState.pagesScrollState['trending']);
  }


  onScroll(e: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight + 300;

    /* Signals */
    /* const scrollState = this.gifsSState.trendingScrollState();
    scrollState.treading = scrollTop;
    this.gifsSState.trendingScrollState.set(scrollState); */

    /* Record */
    let pagesScroll = this.gifsSState.pagesScrollState;
    pagesScroll['trending'] = scrollTop;
    this.gifsSState.pagesScrollState = pagesScroll;
    console.log(pagesScroll);
    this.gifsSState.updatePagesScrolState( 'treading', scrollTop );

    if( isAtBottom ) {
      this.gifsS.loadTrendingGifs();
    }
  }

}
