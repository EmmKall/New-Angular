import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryI } from '@app/country/interfaces/CountryI';
import { CountrySService } from '@app/country/services/CountryS.service';
import { SearchComponentComponent } from "@app/country/shared/components/SearchComponent/SearchComponent.component";
import { TableComponentComponent } from "@app/country/shared/components/TableComponent/TableComponent.component";

@Component({
  selector: 'app-ByRegionPage',
  templateUrl: './ByRegionPage.component.html',
  styleUrls: ['./ByRegionPage.component.css'],
  imports: [SearchComponentComponent, TableComponentComponent]
})
export class ByRegionPageComponent implements OnInit {

  private  countrySService: CountrySService = inject(CountrySService);

  data = computed<CountryI[]>(this.countrySService.countries);

  regions: string[] = ['Asia', 'Europe', 'Africa', 'America', 'Australia', 'Ocenia', 'Artarctica'];

  activatedRoute:ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    const queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
    if(queryParam.trim().length > 0) {
      this.onSearch(queryParam);
    }
  }

  ngOnInit() {
  }

  onSearch(term: string): void {
    if(term.trim().length === 0) return;
    console.log(term);
    return;
    this.countrySService.getCountryByRegion(term);
  }

}
