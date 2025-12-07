import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CountryI } from '@app/country/interfaces/CountryI';
import { CountrySService } from '@app/country/services/CountryS.service';
import { SearchComponentComponent } from "@app/country/shared/components/SearchComponent/SearchComponent.component";
import { TableComponentComponent } from "@app/country/shared/components/TableComponent/TableComponent.component";

@Component({
  selector: 'app-ByCapitalPage',
  templateUrl: './ByCapitalPage.component.html',
  styleUrls: ['./ByCapitalPage.component.css'],
  imports: [
    CommonModule,
    SearchComponentComponent,
    TableComponentComponent,
  ]
})
export default class ByCapitalPageComponent implements OnInit {

  private countrySService: CountrySService = inject(CountrySService);

  data = computed<CountryI[]>(this.countrySService.countries);
  //data = signal<CountryI[]>(this.countrySService.countries());

  constructor() { }

  ngOnInit() {
  }

  onSearch(term: string): void {
    if(term.trim().length === 0) return;
    this.countrySService.getCountryByCapital(term);
  }

}
