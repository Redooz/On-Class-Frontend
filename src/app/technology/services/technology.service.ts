import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateTechnologyRequest } from '../dtos/request/create-technology.request';

@Injectable()
export class TechnologyService {
  private apiUrl = 'http://localhost:8080/technologies/';

  constructor(private httpCLient: HttpClient) {}

  createTechnology(technology: CreateTechnologyRequest) {
    return this.httpCLient.post(this.apiUrl, technology);
  }
}
