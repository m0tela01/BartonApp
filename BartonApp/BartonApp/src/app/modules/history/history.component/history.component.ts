import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';

import { HttpClient } from '@angular/common/http'
import { ScheduleObject } from '../../../core/models/ScheduleObject';

export class HistoryObj {
  jobName: string;
  employeeName: string;
  shift: number;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  testObserv$: Observable<any>;
  test: any;

  colsSchedule: any[];
  schedules: Array<ScheduleObject>;

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpClient) {}

  // do we want to by default display the most recent schedule ?
  ngOnInit() {
    this.testObserv$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.test = params.get('id')))
    );

    this.getCurrentSchedules();
    this.initalizeScheduleTable();

    console.log('history has been loaded');
  }

  initalizeScheduleTable() {
    this.colsSchedule = [
      { field: 'seniorityNumber', header: 'Seniority Number' },
      { field: 'clockNumber', header: 'Clock Number' },
      { field: 'employeeName', header: 'Employee Name' },
      { field: 'jobName', header: 'Job Name' },
      { field: 'departmentName', header: 'Department Name' },
      { field: 'shift', header: 'Scheduled Shift' },
      { field: 'shiftPreference', header: 'Prefered Shift' },
      { field: 'scheduleDate', header: 'Schedule Date' }
    ];
  }


  getCurrentSchedules() {
    this.httpService.get('https://localhost:44392/api/BartonData/GetCurrentSchedule').subscribe(
      data => {
        this.schedules = data as Array<ScheduleObject>;
            console.log(this.schedules[0].departmentName);    //debugging - sanity check: remove

            //sorting for looks
            this.schedules.sort(function (a, b) { return a.shift - b.shift });

            //console.log(this.schedules);    //testing : remove
            //this.separateSchedules();
            //console.log(this.scheduleShift1);
            //this.updateRowGroupMetaData();
            //this.updateRowGroupMetaData_TEST()
      });

    //this.jaketest();
  }

  ///////////////////////////
  rowGroupMetadata: any;

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    //verify object is filled
    if (this.schedules) {
      for (let i = 0; i < this.schedules.length; i++) {
        let rowData = this.schedules[i];

        //start indexing by job for row group
        let job = rowData.jobName;
        if (i == 0) {
          this.rowGroupMetadata[job] = { index: 0, size: 1 };
        } else {
          let previousRowData = this.schedules[i - 1];
          let previousRowGroup = previousRowData.jobName;
          if (job === previousRowGroup) this.rowGroupMetadata[job].size++;
          else this.rowGroupMetadata[job] = { index: i, size: 1 };
        }
      }
    }
  }

    //////////////////////////////////////////////////////////////////////////////////////////
    //              TODO: split schedules into three separate objects                       //
    //////////////////////////////////////////////////////////////////////////////////////////


    //rowGroupMetadata_TEST: any;
    //scheduleShift1: Array<ScheduleObject> = [];
    //separateSchedules() {
    //    this.schedules.forEach(s => {
    //        //since the test data only has shift 1 i'm using the shift preference
    //        if (s.shift == 1) {
    //            this.scheduleShift1.push(s)
    //        }
    //    });
    //}

    //onSort_TEST() {
    //    this.updateRowGroupMetaData_TEST();
    //}

    //updateRowGroupMetaData_TEST() {
    //    this.rowGroupMetadata_TEST = {};

    //    //verify object is filled
    //    if (this.scheduleShift1) {
    //        for (let i = 0; i < this.scheduleShift1.length; i++) {
    //            let rowData = this.scheduleShift1[i];

    //            //start indexing by job for row group
    //            let job = rowData.jobName;
    //            if (i == 0) {
    //                this.rowGroupMetadata_TEST[job] = { index: 0, size: 1 };
    //            } else {
    //                let previousRowData = this.scheduleShift1[i - 1];
    //                let previousRowGroup = previousRowData.jobName;
    //                if (job === previousRowGroup) this.rowGroupMetadata_TEST[job].size++;
    //                else this.rowGroupMetadata_TEST[job] = { index: i, size: 1 };
    //            }
    //        }
    //    }
    //}


  onTestClick() {
    console.log(this.test);
  }

  onTestyTest() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.test = params.get('id')))
    );
  }
}
