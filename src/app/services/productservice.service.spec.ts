import { TestBed } from '@angular/core/testing';

import { Productservice } from './productservice.service';

describe('ProductserviceService', () => {
  let service: Productservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
