import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  templateUrl: './heavy-loaders-fast.component.html',
  styleUrls: ['./heavy-loaders-fast.component.css']
})
export class HeavyLoadersFastComponent implements OnInit {

  cssClass = input.required<string>();

  constructor() { }

  ngOnInit() {
  }

}
