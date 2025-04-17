import { TestBed } from '@angular/core/testing';

import { UseClientSiteService } from './use-client-site.service';

describe('UseClientSiteService', () => {
  let service: UseClientSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClientSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
