import { TestBed } from '@angular/core/testing';

import { GifsS } from './gifs-s';

describe('GifsS', () => {
  let service: GifsS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
