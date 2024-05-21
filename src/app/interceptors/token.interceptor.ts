import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = "eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxNjI2NjQwNCwiZXhwIjoxNzE2NTI5MzUwfQ.NNY03OD6G4xYS8Uz70WsQHqieM1h_2BveX1pap2rvadUZsHtm4jDw4kpauXhAMqe";

    if (!accessToken) {
      return next.handle(request);
    }

    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return next.handle(modifiedRequest);
  }
}
