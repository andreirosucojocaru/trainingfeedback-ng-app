import { ApplicationConfiguration } from './../shared/application-configuration';
import { Employee } from '../shared/model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  public save(employee: Employee) {
    console.log('invoke save with argument ' + employee + ' at url: ' + ApplicationConfiguration.API_ENDPOINT + '/employee/add');
    return this.http.post<Employee>(ApplicationConfiguration.API_ENDPOINT + '/employee/add', employee);
  }
}
