import { TestBed } from '@angular/core/testing';

import { UseClientProfileService } from './use-client-profile.service';

describe('UseClientProfileService', () => {
  let service: UseClientProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClientProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
