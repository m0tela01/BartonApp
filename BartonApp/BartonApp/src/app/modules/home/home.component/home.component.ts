import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { HistoryObject } from '../../../core/models/HistoryObject';
import { HttpClient } from '@angular/common/http';

export interface previousSchedule {
  weekday;
  weekend;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'BartonApp';
  scheds: previousSchedule[];

  colsHistory: any[];
  history: Array<HistoryObject>;

  constructor(public router: Router, private httpService: HttpClient) {}

  ngOnInit() {
    this.getScheduleHistory();
    this.intializeScheduleHistoryTable();

    console.log('home has been loaded');
  }

  onRunScheduler() {
    this.router.navigate(['/history', 12]);
  }

  intializeScheduleHistoryTable() {
    this.colsHistory = [
      { field: 'weekDay', header: 'Weekday Schedules' },
      { field: 'weekEnd', header: 'Weekend Schedules' }
    ];
  }


  getScheduleHistory() {
    this.httpService.get('https://localhost:44392/api/BartonData/GetScheduleHistory').subscribe(
      data => {
        this.history = data as Array<HistoryObject>;
        console.log(this.history[0].weekDay);    //debugging - sanity check: remove
      });
  }
}
