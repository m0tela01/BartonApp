import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';
import { EmployeeObject } from '../../core/models/EmployeeObject';
import { ScheduleObject } from '../models/ScheduleObject';
import { TemplateObject } from '../models/TemplateObject';
import { EmployeeNoteObject } from '../models/EmployeeNoteObject';
import { FullScheduleObject } from '../models/FullScheduleObject';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService extends ServiceBase {

  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }

  // #Region Gets
  getCurrentTemplate(): Observable<TemplateObject[]> {
    return this.get('GetCurrentTemplate');
  }

  //Get Current Schedule when history page opens
  getCurrentSchedule(): Observable<FullScheduleObject> {
    return this.get('GetCurrentSchedule');
  }

  //Get Current Schedule when history page opens
  getFullSchedule(): Observable<FullScheduleObject> {
    return this.get('GetFullSchedule');
  }

  generateWeekdaySchedule(): Observable<boolean> {
    return this.get('GenerateWeekdaySchedule');
  }

  getScheduleHistoryDates(): Observable<any> {
    return this.get('GetScheduleHistoryDates');
  }

  // #EndRegion Gets

  // #Region Posts

  insertNewTemplates(templates: TemplateObject[]): Observable<any> {
    return this.post('InsertNewTemplates', templates);
  }

  insertEmployeeNotes(employeeNotes: EmployeeNoteObject[]): Observable<any> {
    return this.post('InsertEmployeeNotes', employeeNotes);
  }

  // #EndRegion Posts
}
