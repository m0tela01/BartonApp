import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';
import { EmployeeObject } from '../../core/models/EmployeeObject';
import { ScheduleObject } from '../models/ScheduleObject';
import { TemplateObject } from '../models/TemplateObject';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService extends ServiceBase {
  //will be the scheduleData returned when the schedule is created
  private scheduleData = 1;

  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }

  //method to set the private variable
  setData(value: number) {
    this.scheduleData = value;
  }
  //method to get the private variable
  getData() {
    return this.scheduleData;
  }

  getCurrentTemplate(): Observable<TemplateObject[]> {
    return this.get('GetCurrentTemplate');
  }

  //Get Current Schedule when history page opens
  getCurrentSchedule(): Observable<ScheduleObject[]> {
    return this.get('GetCurrentSchedule');
  }

  getEmployees(): Observable<any> {
    return this.get('api/BartonData/GetEmployeeData');
  }
}
