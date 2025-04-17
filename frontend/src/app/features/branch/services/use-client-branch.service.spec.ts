import { TestBed } from '@angular/core/testing';

import { UseClientBranchService } from './use-client-branch.service';

describe('UseClientBranchService', () => {
  let service: UseClientBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClientBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
