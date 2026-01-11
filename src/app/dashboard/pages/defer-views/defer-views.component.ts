import { Component, OnInit } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders-fast/heavy-loaders-fast.component';
import { HeavyLoadresSlowComponent } from "@shared/heavy-loadres-slow/heavy-loadres-slow.component";
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css'],
  imports: [
    HeavyLoadersFastComponent,
    HeavyLoadresSlowComponent,
    TitleComponent,
]
})
export default class DeferViewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
