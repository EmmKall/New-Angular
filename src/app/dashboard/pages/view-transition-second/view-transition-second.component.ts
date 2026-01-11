import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-second',
  templateUrl: './view-transition-second.component.html',
  styleUrls: ['./view-transition-second.component.css'],
  imports: [
    TitleComponent,
  ]
})
export default class ViewTransitionSecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
