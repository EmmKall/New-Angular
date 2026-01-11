import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loadres-slow',
  templateUrl: './heavy-loadres-slow.component.html',
  styleUrls: ['./heavy-loadres-slow.component.css'],
  imports: [CommonModule]
})
export class HeavyLoadresSlowComponent implements OnInit {

  bgColor = input.required<string>();

  constructor() {

    const start = Date.now();

    while(Date.now() - start < 3000) {
    }
    console.log('HeavyLoader Component');
  }

  ngOnInit() { }

}
