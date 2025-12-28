import { afterNextRender, afterRenderEffect, Component, effect, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { TitleComponent } from 'src/app/components/Title/Title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #BADA55'
  );
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    TitleComponent,
  ]
})
export class HomePageComponent implements OnInit, OnChanges {

  tradicionalPorperty = 'Emmanuel';
  signalProperty = signal<string>('Emmanuel');

  basicEffect = effect( (onCleanup) => {
    log('HomePageComponent','basicEffect executed');

    onCleanup(() => {
      log('HomePageComponent','basicEffect cleanup executed');
    });
  });

  constructor() {
    log('HomePageComponent initialized','constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    log('HomePageComponent','ngOnChanges called');
  }

  ngOnInit() {
    log('HomePageComponent','ngOnInit called');
  }

  ngDoCheck() {
    log('HomePageComponent','ngDoCheck called');
  }

  ngAfterCOntentInit() {
    log('HomePageComponent','ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    log('HomePageComponent','ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    log('HomePageComponent','ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    log('HomePageComponent','ngAfterViewChecked called');
  }

  ngOnDestroy() {
    log('HomePageComponent','ngOnDestroy called');
  }

  afterNextRender = afterNextRender(() => {
    log('HomePageComponent','afterNextRender callback executed');
  });

  afterRender = afterRenderEffect(() => {
    log('HomePageComponent','afterRender callback executed');
  });

  changeTradicionalProperty() {
    this.tradicionalPorperty = this.tradicionalPorperty === 'Emmanuel' ? 'Angular' : 'Emmanuel';
    log('HomePageComponent','tradicionalPorperty changed to', this.tradicionalPorperty);
  }

  changeSignalProperty() {
    const newValue = this.signalProperty() === 'Emmanuel' ? 'Angular' : 'Emmanuel';
    this.signalProperty.set(newValue);
    log('HomePageComponent','signalProperty changed to', this.signalProperty());
  }

}
