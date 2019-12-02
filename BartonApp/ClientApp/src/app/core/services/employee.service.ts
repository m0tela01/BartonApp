import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';
import { EmployeeObject } from '../models/EmployeeObject';
import { JobObject } from '../models/JobObject';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ServiceBase {

  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }

  // #Region Get

  getAllEmployees(): Observable<EmployeeObject[]> {
    return this.get('GetEmployeeData');
  }

  getJobs(): Observable<EmployeeObject[]> {
    return this.get('GetJobs');
  }

  // #EndRegion Get

  updateEmployeeById(employee: EmployeeObject): Observable<any> {
    console.log(employee);
    return this.post('UpdateEmployeeById', employee);
  }

  insertEmployee(employee: EmployeeObject): Observable<any> {
    return this.post('InsertEmployee', employee);
  }

  insertJob(job: JobObject): Observable<any> {
    return this.post('InsertJob', job);
  }

  deleteEmployee(employee: EmployeeObject): Observable<any> {
    return this.post('DeleteEmployee', employee);
  }
}
