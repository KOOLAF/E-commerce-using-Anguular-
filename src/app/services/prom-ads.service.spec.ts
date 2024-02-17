import { TestBed } from '@angular/core/testing';

import { PromAdsService } from './prom-ads.service';

describe('PromAdsService', () => {
  let service: PromAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
