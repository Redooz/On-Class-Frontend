import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateBootcampVersionRequest } from '../dtos/request/create-bootcamp-version.request';

@Injectable({
  providedIn: 'root'
})
export class BootcampVersionService {
  public apiUrl = `${environment.apiBaseUrl}/version/`;

  constructor(private httpClient: HttpClient) { }

  createBootcampVersion(version: CreateBootcampVersionRequest) {
    return this.httpClient.post(this.apiUrl, version);
  }

  getBootcampVersions(bootcampId: number) {
    return this.httpClient.get(`${this.apiUrl}bootcamp/${bootcampId}`);
  }
}
