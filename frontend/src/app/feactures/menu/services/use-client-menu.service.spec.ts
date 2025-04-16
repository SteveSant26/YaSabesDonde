import { TestBed } from '@angular/core/testing';

import { UseClientMenuService } from './use-client-menu.service';

describe('UseClientMenuService', () => {
  let service: UseClientMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClientMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
