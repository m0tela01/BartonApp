import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';
import { EmployeeObject } from '../models/EmployeeObject';
import { Component, Inject } from '@angular/core';

//@Component({
//  selector: 'app-fetch-data',
//  templateUrl: './fetch-data.component.html'
//})


@Injectable({
  providedIn: 'root'
})


export class Service extends ServiceBase {

  //public employee: EmployeeObject[];

  //employees: EmployeeObject[];
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  super(http);
  //  http.get<EmployeeObject[]>(baseUrl + 'api/BartonData/GetEmployees').subscribe(result => {
  //    this.employee = result;
  //  }, error => console.error(error));
  //}

  //put api calls here 
  getScheduleByDate(date: number): Observable<any> {
    //TODO: Mike here is the api call
    return this.get('put the rest of the API here');
  }
}
