import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { HistoryObject } from '../../../core/models/HistoryObject';
import { HttpClient } from '@angular/common/http';

import { SchedulerService } from '../../../core/services/scheduler.service';

export interface previousSchedule {
  weekDay;
  weekEnd;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'BartonApp';
  scheds: previousSchedule[];
  
  cols: any[];
  colsHistory: any[];
  history: Array<HistoryObject>;

  constructor(public router: Router, private httpService: HttpClient, public schedulerService: SchedulerService) { }

  ngOnInit() {
    this.getPreviousSchedules();


    //this.getScheduleHistory();
    this.intializeScheduleHistoryTable();

    console.log('home has been loaded');
  }



  onRunScheduler() {
    this.router.navigate(['/scheduler']);
  }

  onPreviousSchedule() {
    //the second part is a variable that can be passed. We can pass a date or ID
    this.router.navigate(['/history', 12]);
  }

  intializeScheduleHistoryTable() {
    this.colsHistory = [
      { field: 'weekDay', header: 'Weekday Schedules' },
      { field: 'weekEnd', header: 'Weekend Schedules' }
    ];
  }


  //getScheduleHistory() {
  //  this.httpService.get('https://localhost:44392/api/BartonData/GetScheduleHistory').subscribe(
  //    data => {
  //      this.history = data as Array<HistoryObject>;
  //      console.log(this.history[0].weekDay);    //debugging - sanity check: remove
  //    });
  //}

  //TODO: turn into service call
  getPreviousSchedules() {
    this.scheds = [
      { weekDay: '9/1/19-9/7/19', weekEnd: '9/8/19-9/10/19' },
      { weekDay: '9/10/19-9/17/19', weekEnd: '9/18/19-9/20/19' },
      { weekDay: '9/20/19-9/27/19', weekEnd: '9/28/19-9/30/19' }
    ];
  }
}
