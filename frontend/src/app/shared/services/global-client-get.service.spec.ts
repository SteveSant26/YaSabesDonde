import { TestBed } from '@angular/core/testing';

import { GlobalClientGetService } from './global-client-get.service';

describe('GlobalClientGetService', () => {
  let service: GlobalClientGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalClientGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
