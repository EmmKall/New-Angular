import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = input.required<string>();
  //@Input({required: true}) title!: string;

  constructor() { }

  ngOnInit() {
  }

}
