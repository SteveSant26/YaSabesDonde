import { TestBed } from '@angular/core/testing';

import { UseManagerLocationService } from './use-manager-location.service';

describe('UseManagerLocationService', () => {
  let service: UseManagerLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseManagerLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
