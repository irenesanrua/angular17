import { TestBed } from '@angular/core/testing';

import { RopaService } from './ropa.service.service';

describe('RopaServiceService', () => {
  let service: RopaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
