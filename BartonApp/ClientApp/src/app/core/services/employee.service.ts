import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';
import { EmployeeObject } from '../models/EmployeeObject';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ServiceBase {

  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }

  //put api calls here 
  getAllEmployees(): Observable<EmployeeObject[]> {
    return this.get('GetEmployeeData');
  }
}
