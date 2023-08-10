import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7157/api/';
  getData() {
    return this.http.get(this.baseUrl + 'Department/GetDepartment');
  }
}
