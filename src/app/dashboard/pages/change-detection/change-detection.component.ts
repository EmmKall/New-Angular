import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JsonPipe,
    TitleComponent,
  ]
})
export class ChangeDetectionComponent implements OnInit {

  frameworksAsSignal = signal({
    name: 'Angular',
    releaseYear: 2026
  });

  frameworksAsProperty = {
    name: 'Angular',
    releaseYear: 2026
  };

  currentFramework = computed(() => {
    return this.frameworksAsSignal();
  });

  constructor() {
    setTimeout(() => {
      this.frameworksAsProperty.name = 'React';
      this.frameworksAsSignal.set({
        name: 'React',
        releaseYear: 2026
      });
    }, 3000);
  }

  ngOnInit() {
  }

}
