import { TestBed } from '@angular/core/testing';

import { UseClientCategoryProductsService } from './use-client-category-products.service';

describe('UseClientCategoryProductsService', () => {
  let service: UseClientCategoryProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClientCategoryProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
