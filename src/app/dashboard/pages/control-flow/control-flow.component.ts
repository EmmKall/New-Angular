import { Component, OnInit, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
  imports: [
    TitleComponent
  ]
})
export class ControlFlowComponent implements OnInit {

  showContent = signal<boolean>(false);

  grade = signal<Grade>('A');
  grades: Grade[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  frameworks: string[] = ['Angular', 'React', 'Vue', 'Svelte'];


  constructor() { }

  ngOnInit() { }

  toggleContent(): void {
    this.showContent.update(value => !value);
  }

  setGrade(grade: Grade): void {
    switch (grade) {
      case 'A':
        this.grade.set('A');
        break;
      case 'B':
        this.grade.set('B');
        break;
      case 'C':
        this.grade.set('C');
        break;
      case 'D':
        this.grade.set('D');
        break;
      case 'E':
        this.grade.set('E');
        break;
      case 'F':
        this.grade.set('F');
        break;
      default:
        console.log('Invalid grade');
    }
  }

}
