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
  //can tell if going to history page from scheduler
  private isFromScheduler: boolean = false;

  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }

  //methods to set and 
  setIsFromScheduler(value: boolean) {
    this.isFromScheduler = value;
  }

  getIsFromScheduler() {
    return this.isFromScheduler;
  }

  // #Region Gets
  getCurrentTemplate(): Observable<TemplateObject[]> {
    return this.get('GetCurrentTemplate');
  }

  //Get Current Schedule when history page opens
  getCurrentSchedule(): Observable<ScheduleObject[]> {
    return this.get('GetCurrentSchedule');
  }

  generateWeekdaySchedule(): Observable<ScheduleObject[]> {
    return this.get('GenerateWeekdaySchedule');
  }

  getScheduleHistoryDates(): Observable<any> {
    return this.get('GetScheduleHistoryDates');
  }


  // #EndRegion Gets

  // #Region Posts

  insertNewTemplates(templates: TemplateObject[]): Observable<any> {
    console.log(templates);
    return this.post('InsertNewTemplates', templates);
  }

  // #EndRegion Posts
}
