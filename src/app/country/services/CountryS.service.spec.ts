/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountrySService } from './CountryS.service';

describe('Service: CountryS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountrySService]
    });
  });

  it('should ...', inject([CountrySService], (service: CountrySService) => {
    expect(service).toBeTruthy();
  }));
});
