import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { RegisterAdminRequest } from '../dtos/request/register-admin.request';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, HttpClient]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a POST request to register an admin', () => {
    const admin: RegisterAdminRequest = {
      name: 'John',
      lastName: 'Doe',
      documentNumber: '123456789',
      telephone: '123456789',
      email: 'john@email.com',
      password: 'password'
    }

    service.registerAdmin(admin).subscribe();

    const req = httpMock.expectOne(`${service.apiUrl}/register/admin`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(admin);
    req.flush({});
  });
});
