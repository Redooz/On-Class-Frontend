import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {
  public apiUrl = `${environment.apiBaseUrl}/bootcamps/`;

  constructor(private httpClient: HttpClient) { }

  createBootcamp(bootcamp: any) {
    return this.httpClient.post(this.apiUrl, bootcamp);
  }
}
