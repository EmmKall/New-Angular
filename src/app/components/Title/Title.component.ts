import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-Title',
  templateUrl: './Title.component.html',
  styleUrls: ['./Title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  title = input<string>('Default Title');

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges changes:', changes);
    for(const inputName in changes) {
      const inputValues = changes[inputName];
      const previousValue = inputValues.previousValue;
      const currentValue = inputValues.currentValue;
      console.log('HomePageComponent','ngOnChanges called for', inputName, 'previousValue:', previousValue, 'currentValue:', currentValue);
    }
  }

}
