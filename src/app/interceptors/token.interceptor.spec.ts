import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add Authorization header with access token to the request', () => {
    const dummyRequest = httpClient.get('/api/data');
    const accessToken = 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxNTc4MDY1MywiZXhwIjoxNzE2MDQzNTk5fQ.KAOQQ8DmjVqfCXo3ls90biDTw4dURptoM-9bNn-m8gPCiWLTLuyaSkqsLtAzEjv8';

    dummyRequest.subscribe();

    const httpRequest = httpMock.expectOne('/api/data');
    expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    expect(httpRequest.request.headers.get('Authorization')).toBe(`Bearer ${accessToken}`);
  });

});
