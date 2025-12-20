import { Component, effect, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-SearchComponent',
  templateUrl: './SearchComponent.component.html',
  styleUrls: ['./SearchComponent.component.css']
})
export class SearchComponentComponent implements OnInit {

  updatTermE = output<string>();

  placeholder = input<string>('Search...');
  debouceTime = input<number>(1000);

  inputValue = signal<string>('');

  constructor() { }

  ngOnInit() {
  }

  debounceEffect = effect((onCleanup) => {

    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.onSearch(value);
    }, this.debouceTime());

    onCleanup(() => clearTimeout(timeout));
  });

  onSearch(term: string): void {
    this.updatTermE.emit(term);
  }

}

