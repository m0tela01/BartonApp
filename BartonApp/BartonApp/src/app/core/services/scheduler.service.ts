import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SchedulerService extends ServiceBase {

  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }

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
    return this.get('/api/BartonData/GetScheduleByDate');
  }
}
