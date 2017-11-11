import { TestBed, inject } from '@angular/core/testing';

import { LineCategoryService } from './line-category.service';

describe('LineCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineCategoryService]
    });
  });

  it('should be created', inject([LineCategoryService], (service: LineCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
