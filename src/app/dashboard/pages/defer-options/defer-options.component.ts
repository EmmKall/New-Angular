import { Component, OnInit } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  templateUrl: './defer-options.component.html',
  styleUrls: ['./defer-options.component.css'],
  imports: [
    TitleComponent,
    HeavyLoadersFastComponent,
  ]
})
export class DeferOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
