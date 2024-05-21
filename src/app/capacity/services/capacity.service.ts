import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateCapacityRequest } from '../dtos/request/create-capacity.request';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {
  private apiUrl = `${environment.apiBaseUrl}/capacities/`;

  constructor(private httpCLient: HttpClient) { }

  createCapacity(capacity: CreateCapacityRequest) {
    return this.httpCLient.post(this.apiUrl, capacity);
  }

}