import type { CountryI } from "../interfaces/CountryI";
import type { CountryServiceI } from "../interfaces/CountryServiceI";

export class CountryMapper {

  static toCountryI(countryData: CountryServiceI, translation: string = 'spa'): CountryI {
    return {
      id: countryData.cca2,
      name: countryData.translations[translation].common ?? 'No name in Spanish',
      icon: countryData.coatOfArms.png,
      flag: countryData.flags.png ?? countryData.flags.svg,
      capital: countryData.capital.join(', ') ?? countryData.capital[0],
      population: countryData.population,
      lat: countryData.latlng[0] ?? 0,
      lng: countryData.latlng[1] ?? 0,
    };
  }

  static mapCountryItemsArray(items: CountryServiceI[]): CountryI[] {
    return items.map( item => this.toCountryI(item, 'spa') );
  }

}
