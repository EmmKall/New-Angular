import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountryI } from '@app/country/interfaces/CountryI';

@Component({
  selector: 'app-TableComponent',
  templateUrl: './TableComponent.component.html',
  styleUrls: ['./TableComponent.component.css'],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class TableComponentComponent implements OnInit {

  data = input.required<CountryI[]>();

  constructor() { }

  ngOnInit() {
  }

}
