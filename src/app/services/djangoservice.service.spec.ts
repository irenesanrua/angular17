import { TestBed } from '@angular/core/testing';

import { DjangoserviceService } from './djangoservice.service';

describe('DjangoserviceService', () => {
  let service: DjangoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
