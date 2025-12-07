import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "@app/country/components/TopMenu/TopMenu.component";

@Component({
  selector: 'app-CountryLayout',
  templateUrl: './CountryLayout.component.html',
  styleUrls: ['./CountryLayout.component.css'],
  imports: [RouterOutlet, TopMenuComponent]
})
export class CountryLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
