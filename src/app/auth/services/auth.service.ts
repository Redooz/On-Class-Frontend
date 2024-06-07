import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterAdminRequest } from '../dtos/request/register-admin.request';
import { LoginRequest } from '../dtos/request/login.request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = `${environment.apiUserBaseUrl}/auth`

  constructor(private httpClient: HttpClient) { }

  registerAdmin(admin: RegisterAdminRequest) {
    return this.httpClient.post(`${this.apiUrl}/register/admin`, admin);
  }

  login(request: LoginRequest) {
    localStorage.removeItem('token');
    return this.httpClient.post(`${this.apiUrl}/login`, request);
  }

}
