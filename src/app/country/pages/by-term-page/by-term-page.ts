import { CommonModule, Location } from '@angular/common';
import { Component, computed, inject, input, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CountryI } from '@app/country/interfaces/CountryI';
import { CountrySService } from '@app/country/services/CountryS.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-by-term-page',
  imports: [
    CommonModule,
    RouterLink
],
  templateUrl: './by-term-page.html',
  styleUrl: './by-term-page.css',
})
export class ByTermPage implements OnInit{

  location = inject(Location);

  private countrySService: CountrySService = inject(CountrySService);
  private _router: Router = inject(Router);

  code = toSignal(
    inject(ActivatedRoute).params.pipe(
      map( params => params['code'] ?? '')
    )
  );

  code2 = inject(ActivatedRoute).snapshot.paramMap.get('code');

  data = computed<CountryI[]>(this.countrySService.countries);
  currentCountry: CountryI = {
    id: '',
    name: '',
    icon: '',
    flag: '',
    capital: '',
    population: 0,
    lat: 0,
    lng: 0
  };

  ngOnInit(): void {
    this.currentCountry = this.data().find( country => country.name === this.code()) ?? this.currentCountry;
    if( !this.currentCountry || this.currentCountry.name === '' ){
      this._router.navigate(['/country/by-capital']);
    };
  }

  goBack(): void {
    this.location.back();
  }

  /* country = rxResource({
    request: () => ({code: this.code }),
    loader: this.countrySService.getCountryByCapital(request.code)
  }); */

}
