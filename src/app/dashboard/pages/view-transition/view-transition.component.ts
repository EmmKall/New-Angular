import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  templateUrl: './view-transition.component.html',
  styleUrls: ['./view-transition.component.css'],
  imports: [
    TitleComponent,
  ]
})
export default class ViewTransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
