import { TestBed } from '@angular/core/testing';

import { UseClientProductService } from './use-client-product.service';

describe('UseClientProductService', () => {
  let service: UseClientProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClientProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
