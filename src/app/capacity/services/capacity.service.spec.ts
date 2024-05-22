import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CapacityService } from './capacity.service';
import { CreateCapacityRequest } from '../dtos/request/create-capacity.request';
import { CapacityOrderByOption } from '../utils/capacity-order-by-option';

describe('CapacityService', () => {
  let service: CapacityService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CapacityService]
    });
    service = TestBed.inject(CapacityService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to create a capacity', () => {
    const capacity: CreateCapacityRequest = {
      name: 'name',
      description: 'description',
      technologies: [
        {
          id: 1,
          name: 'technology',
        },
        {
          id: 2,
          name: 'technology2',
        }
      ]
    };
    service.createCapacity(capacity).subscribe();
    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(capacity);
    req.flush({});
  });

  it('should send a GET request to get paginated capacities', () => {
    const size = 10;
    const page = 1;
    const isAscending = true;
    const orderBy = CapacityOrderByOption.NAME
    service.getCapacitiesPaginated(size, page, isAscending, orderBy).subscribe();
    const req = httpMock.expectOne(`${service.apiUrl}?size=${size}&page=${page}&isAsc=${isAscending}&orderBy=${orderBy}`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should send a GET request to get capacities count', () => {
    service.getCapacitiesCount().subscribe();
    const req = httpMock.expectOne(`${service.apiUrl}count`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});
