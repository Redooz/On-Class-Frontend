import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TechnologyService } from './technology.service';
import { CreateTechnologyRequest } from '../dtos/request/create-technology.request';

describe('TechnologyService', () => {
  let service: TechnologyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TechnologyService]
    });
    service = TestBed.inject(TechnologyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to create a technology', () => {
    const technology: CreateTechnologyRequest = { description: 'Description Technology' , name: 'Test Technology' };

    service.createTechnology(technology).subscribe();

    const req = httpMock.expectOne('http://localhost:8080/technologies/');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(technology);
    req.flush({});
  });

  it('should send a GET request to retrieve technologies with the specified parameters', () => {
    const size = 10;
    const page = 1;
    const isAscending = true;

    service.getTechnologiesPaginated(size, page, isAscending).subscribe();

    const req = httpMock.expectOne(`http://localhost:8080/technologies/?size=${size}&page=${page}&isAsc=${isAscending}`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should send a GET request to retrieve the count of technologies', () => {
    service.getTechnologiesCount().subscribe();

    const req = httpMock.expectOne('http://localhost:8080/technologies/count');
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should send a GET request to retrieve all available technologies', () => {
    service.getAllAvailableTechnologies().subscribe();

    const req = httpMock.expectOne('http://localhost:8080/technologies/available');
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

});
