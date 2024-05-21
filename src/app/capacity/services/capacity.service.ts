import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateCapacityRequest } from '../dtos/request/create-capacity.request';
import { CapacityOrderByOption } from '../utils/capacity-order-by-option';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {
  private apiUrl = `${environment.apiBaseUrl}/capacities/`;

  constructor(private httpCLient: HttpClient) { }

  createCapacity(capacity: CreateCapacityRequest) {
    return this.httpCLient.post(this.apiUrl, capacity);
  }

  getCapacitiesPaginated(size: number, page: number, isAscending: boolean, orderBy: CapacityOrderByOption) {
    return this.httpCLient.get(this.apiUrl + `?size=${size}&page=${page}&isAsc=${isAscending}&orderBy=${orderBy}`);
  }

  getCapacitiesCount() {
    return this.httpCLient.get(this.apiUrl + 'count');
  }

}
