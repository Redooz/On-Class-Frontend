import { TestBed } from '@angular/core/testing';

import { BootcampVersionService } from './bootcamp-version.service';

describe('BootcampVersionService', () => {
  let service: BootcampVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootcampVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
