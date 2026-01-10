/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormValidationsService } from './FormValidations.service';

describe('Service: FormValidations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormValidationsService]
    });
  });

  it('should ...', inject([FormValidationsService], (service: FormValidationsService) => {
    expect(service).toBeTruthy();
  }));
});
