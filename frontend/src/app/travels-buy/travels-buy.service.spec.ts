import { TestBed } from '@angular/core/testing';

import { TravelsBuyService } from './travels-buy.service';

describe('TravelsBuyService', () => {
  let service: TravelsBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelsBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
