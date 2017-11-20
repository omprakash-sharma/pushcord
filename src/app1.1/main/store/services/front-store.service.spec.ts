import { TestBed, inject } from '@angular/core/testing';

import { FrontStoreService } from './front-store.service';

describe('FrontStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontStoreService]
    });
  });

  it('should be created', inject([FrontStoreService], (service: FrontStoreService) => {
    expect(service).toBeTruthy();
  }));
});
