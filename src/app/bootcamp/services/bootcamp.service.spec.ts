import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BootcampService } from './bootcamp.service';
import { CreateBootcampRequest } from '../dtos/request/create-bootcamp.request';
import { BootcampOrderByOption } from '../utils/bootcamp-order-by-option';
import { HttpClient } from '@angular/common/http';

describe('BootcampService', () => {
  let service: BootcampService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BootcampService, HttpClient]
    });
    service = TestBed.inject(BootcampService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create a bootcamp', () => {
    const bootcamp: CreateBootcampRequest = {
      name: 'Bootcamp name',
      description: 'Bootcamp description',
      capacities: [{ id: 1, name: 'Capacity 1' }, { id: 2, name: 'Capacity 2' }]
    };
    service.createBootcamp(bootcamp).subscribe();

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(bootcamp);
    req.flush({});
  });

  it('should get paginated bootcamps', () => {
    const size = 10;
    const page = 1;
    const isAscending = true;
    const orderBy = BootcampOrderByOption.NAME;

    service.getBootcampsPaginated(size, page, isAscending, orderBy).subscribe();

    const req = httpMock.expectOne(`${service.apiUrl}?size=${size}&page=${page}&isAsc=${isAscending}&orderBy=${orderBy}`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should get bootcamps count', () => {
    service.getBootcampsCount().subscribe();

    const req = httpMock.expectOne(`${service.apiUrl}count`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});
