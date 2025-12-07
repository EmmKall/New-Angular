import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { CountryServiceI } from '../interfaces/CountryServiceI';
import type { CountryI } from '../interfaces/CountryI';
import { CountryMapper } from '../mappers/CountryMapper';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrySService {

  private _http: HttpClient = inject(HttpClient);
  private url: string = `${environment.apiCountryUrl}`;

  isLoading = signal<boolean>(false);
  isError   = signal<string|null>(null);
  countries = signal<CountryI[]>([]);

  /* query = signal<string>('');
  countryResorce = resource({
    request: () => ({ query: this.query}),
    loader: async({ request }) => {
      if(!request.query) return [];

      return await firstValueFrom(
        this.getCountryByCapital(request.query)
      ).then( res => CountryMapper.mapCountryItemsArray(res)
    }
  }); */

  /* query = signal<string>('');
  countryResorce = rxResource({
    request: () => ({ query: this.query}),
    loader: async({ request }) => {
      if(!request.query) return of[];
      return this.getCountryByCapital(request.query)
    }
  }); */

  constructor() { }

  public getCountryByCapital(query: string = ''): void {
    if( this.isLoading() ) return;

    const queryLowerCase: string = query.toLowerCase().trim();
    const url = `${this.url}capital/${queryLowerCase}`;

    this.isLoading.set(true);
    this.isError.set(null);

    this._http.get<CountryServiceI[]>(url)
    /* .pipe(
      delay(3000)
    ) */
    .subscribe({
      next: (res) => {
        this.isError.set(null);
        const data = CountryMapper.mapCountryItemsArray(res);
        this.countries.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isError.set(err.message);
        this.countries.set([]);
        this.isError.set(`Data nof founded with ${query}`);
        this.isLoading.set(false);
      }
    });
  }

  public getCountryByCountry(query: string = ''): void {
    if( this.isLoading() ) return;

    const queryLowerCase: string = query.toLowerCase().trim();
    const url = `${this.url}region/${queryLowerCase}`;

    this.isLoading.set(true);
    this.isError.set(null);

    this._http.get<CountryServiceI[]>(url)
    .subscribe({
      next: (res) => {
        this.isError.set(null);
        const data = CountryMapper.mapCountryItemsArray(res);
        this.countries.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isError.set(err.message);
        this.countries.set([]);
        this.isError.set(`Data nof founded with ${query}`);
        this.isLoading.set(false);
      }
    });
  }

    public getCountryByRegion(query: string = ''): void {
    if( this.isLoading() ) return;

    const queryLowerCase: string = query.toLowerCase().trim();
    const url = `${this.url}region/${queryLowerCase}`;

    this.isLoading.set(true);
    this.isError.set(null);

    this._http.get<CountryServiceI[]>(url)
    .subscribe({
      next: (res) => {
        this.isError.set(null);
        const data = CountryMapper.mapCountryItemsArray(res);
        this.countries.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isError.set(err.message);
        this.countries.set([]);
        this.isError.set(`Data nof founded with ${query}`);
        this.isLoading.set(false);
      }
    });
  }


}
