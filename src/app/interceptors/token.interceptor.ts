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
    const accessToken = "eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxNTc4MDY1MywiZXhwIjoxNzE2MDQzNTk5fQ.KAOQQ8DmjVqfCXo3ls90biDTw4dURptoM-9bNn-m8gPCiWLTLuyaSkqsLtAzEjv8";

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
