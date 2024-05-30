import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BootcampVersionService } from './bootcamp-version.service';
import { HttpClient } from '@angular/common/http';

describe('BootcampVersionService', () => {
  let service: BootcampVersionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BootcampVersionService, HttpClient]
    });
    service = TestBed.inject(BootcampVersionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to create a bootcamp version', () => {
    const version = { startDate: new Date(), endDate: new Date('2025-12-12'), maxNumOfStudents: 10, bootcamp: { id: 123 } };
    service.createBootcampVersion(version).subscribe();

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(version);
    req.flush({});
  });

  it('should send a GET request to retrieve bootcamp versions', () => {
    const bootcampId = 123;
    service.getBootcampVersions(bootcampId).subscribe();

    const req = httpMock.expectOne(`${service.apiUrl}?bootcampId=${bootcampId}`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});
