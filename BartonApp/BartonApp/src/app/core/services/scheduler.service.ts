import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceBase } from '../../shared/baseClasses/service-base'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service extends ServiceBase {
  
  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }
  
  //put api calls here 
  getScheduleByDate(date: number): Observable<any> {
    //TODO: Mike here is the api call
    return this.get('put the rest of the API here');
  }
}
