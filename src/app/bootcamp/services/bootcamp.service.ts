import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateBootcampRequest } from '../dtos/request/create-bootcamp.request';
import { BootcampOrderByOption } from '../utils/bootcamp-order-by-option';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {
  public apiUrl = `${environment.apiBootcampBaseUrl}/bootcamps/`;

  constructor(private httpClient: HttpClient) { }

  createBootcamp(bootcamp: CreateBootcampRequest) {
    return this.httpClient.post(this.apiUrl, bootcamp);
  }

  getBootcampsPaginated(size: number, page: number, isAscending: boolean, orderBy: BootcampOrderByOption) {
    return this.httpClient.get(this.apiUrl + `?size=${size}&page=${page}&isAsc=${isAscending}&orderBy=${orderBy}`);
  }

  getBootcampsCount() {
    return this.httpClient.get(this.apiUrl + 'count');
  }

}
