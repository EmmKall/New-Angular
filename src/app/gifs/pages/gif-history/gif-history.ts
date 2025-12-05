import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsS } from '../../services/gifs-s';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-gif-history',
  imports: [
    CommonModule,
    GifList
],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistory {

  gifS: GifsS = inject(GifsS);

  //query = inject(ActivatedRoute).params.subscribe( (params) => { console.log(params['query']); });
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map( params => params['query'] ?? '')
    )
  );

  gifsByKey = computed( () => { return this.gifS.getHistoryGif(this.query()); });

}
