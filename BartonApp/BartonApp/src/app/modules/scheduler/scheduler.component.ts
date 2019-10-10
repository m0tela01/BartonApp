import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

export interface scheduleCreate {
  job: string;
  s1: number;
  s2: number;
  s3: number;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  scheds: scheduleCreate[];
  cols: any[];

  constructor() {}

  ngOnInit() {
    this.getPreviousSchedules();
    this.intializeTable();

    console.log('scheduler has been loaded');
  }

  intializeTable() {
    this.cols = [
      { field: 'job', header: 'Job' },
      { field: 's1', header: 'Shift 1' },
      { field: 's2', header: 'Shift 2' },
      { field: 's3', header: 'Shift 3' }
    ];
  }

  getPreviousSchedules() {
    this.scheds = [
      { job: 'Filler', s1: 8, s2: 7, s3: 6 },
      { job: 'Case Feeder', s1: 9, s2: 7, s3: 7 },
      { job: 'Testy Test', s1: 6, s2: 1, s3: 9 },
      { job: 'Money Mikes', s1: 8, s2: 4, s3: 8 }
    ];
  }
}
