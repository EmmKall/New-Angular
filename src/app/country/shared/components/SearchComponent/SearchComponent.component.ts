import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-SearchComponent',
  templateUrl: './SearchComponent.component.html',
  styleUrls: ['./SearchComponent.component.css']
})
export class SearchComponentComponent implements OnInit {

  updatTermE = output<string>();

  placeholder = input<string>('Search...');

  constructor() { }

  ngOnInit() {
  }

  onSearch(term: string): void {
    this.updatTermE.emit(term);
  }

}

