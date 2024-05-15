import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateTechnologyRequest } from '../dtos/request/create-technology.request';
import { environment } from 'src/environments/environment';

@Injectable()
export class TechnologyService {
  private apiUrl = `${environment.apiBaseUrl}/technologies/`;

  constructor(private httpCLient: HttpClient) {}

  createTechnology(technology: CreateTechnologyRequest) {
    return this.httpCLient.post(this.apiUrl, technology);
  }

  getTechnologies(size: number, page: number, isAscending: boolean) {
    return this.httpCLient.get(this.apiUrl + `?size=${size}&page=${page}&isAsc=${isAscending}`);
  }

  getTechnologiesCount() {
    return this.httpCLient.get(this.apiUrl + 'count');
  }
}
