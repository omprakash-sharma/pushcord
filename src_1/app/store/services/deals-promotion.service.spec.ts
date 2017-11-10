import { TestBed, inject } from '@angular/core/testing';

import { DealsPromotionService } from './deals-promotion.service';

describe('DealsPromotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealsPromotionService]
    });
  });

  it('should be created', inject([DealsPromotionService], (service: DealsPromotionService) => {
    expect(service).toBeTruthy();
  }));
});
