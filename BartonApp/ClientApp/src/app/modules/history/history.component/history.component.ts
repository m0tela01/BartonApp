import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';

import { HttpClient } from '@angular/common/http'
import { HistoryObject } from '../../../core/models/HistoryObject';
import { ScheduleObject } from '../../../core/models/ScheduleObject';
import { SchedulerService } from '../../../core/services/scheduler.service';
import { MessageService } from 'primeng/api';


export class HistoryObj {
  jobName: string;
  employeeName: string;
  shift: number;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [MessageService]
})
export class HistoryComponent implements OnInit {
  schedules: Array<ScheduleObject>;
  previousSchedules: Array<HistoryObject>;

  scheduleShift1: Array<ScheduleObject> = [];
  rowGroupMetadata1: any = {};
  scheduleShift2: Array<ScheduleObject> = [];
  rowGroupMetadata2: any = {};
  scheduleShift3: Array<ScheduleObject> = [];
  rowGroupMetadata3: any = {};

  colsSchedule: any[];

  constructor(private messageService: MessageService, private schedulerService: SchedulerService) { }

  // do we want to by default display the most recent schedule ?
  ngOnInit() {
    this.getCurrentSchedules();
    this.getScheduleHistoryDates();
    console.log('history has been loaded');
    console.log(this.schedulerService.getIsFromScheduler());
  }

  initalizeScheduleTable() {
    this.colsSchedule = [
      { field: 'employeeName', header: 'Employee Name' },
      { field: 'jobName', header: 'Job Name' },
      { field: 'shift', header: 'Scheduled Shift' },
      { field: 'restrictions', header: 'Restrictions' }
    ];
  }

  private async getScheduleHistoryDates() {
    this.schedulerService.getScheduleHistoryDates().subscribe(
      res => {
        if (res) {
          this.previousSchedules = res as Array<HistoryObject>;
          console.log(this.previousSchedules);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Could not retreive previous schedules.' });
        }
      }
    )
  }

  private async getCurrentSchedules() {
    this.schedulerService.getCurrentSchedule().subscribe(
      res => {
        if (res) {
          this.schedules = res as Array<ScheduleObject>;

          //sort job names and shift
          this.schedules.sort(function (a, b) {
            return a.jobName.localeCompare(b.jobName);
          });
          this.schedules.sort(function (a, b) { return a.shift - b.shift });

          //turn entire schedule into 3 separate schedules
          this.separateSchedules();

          //run the rowgroup method to create each table
          this.rowGroupMetadata1 = this.updateRowGroupMetaData(this.scheduleShift1);
          this.rowGroupMetadata2 = this.updateRowGroupMetaData(this.scheduleShift2);
          this.rowGroupMetadata3 = this.updateRowGroupMetaData(this.scheduleShift3);
        } else {
          //TODO: put in toast or something to say nothing found
          console.log('whoops');
        }
      }
    )
  }

  onSort(tableNumber: number) {
    switch (tableNumber) {
      case 1: {
        this.rowGroupMetadata1 = this.updateRowGroupMetaData(this.scheduleShift1);
        break;
      }
      case 2: {
        this.rowGroupMetadata2 = this.updateRowGroupMetaData(this.scheduleShift2);
        break;
      }
      case 3: {
        this.rowGroupMetadata3 = this.updateRowGroupMetaData(this.scheduleShift3);
        break;
      }
    }
  }

  updateRowGroupMetaData(shiftSchedule: any) {
    let rowGroupMetadata = {};

    //verify object is filled
    if (shiftSchedule) {
      for (let i = 0; i < shiftSchedule.length; i++) {
        let rowData = shiftSchedule[i];

        //start indexing by job for row group
        let jobName = rowData.jobName;
        //if this is the first item, start the object array
        if (i == 0) {
          rowGroupMetadata[jobName] = { index: 0, size: 1 };
        } else {
          let previousRowData = shiftSchedule[i - 1];
          let previousRowGroup = previousRowData.jobName;
          if (jobName === previousRowGroup) rowGroupMetadata[jobName].size++;
          else rowGroupMetadata[jobName] = { index: i, size: 1 };
        }
      }
    }
    return rowGroupMetadata;
  }

  separateSchedules() {
    this.schedules.forEach(s => {
      switch (s.shift) {
        case 1: {
          this.scheduleShift1.push(s)
          break;
        }
        case 2: {
          this.scheduleShift2.push(s)
          break;
        }
        case 3: {
          this.scheduleShift3.push(s)
          break;
        }
      }
    });
  }

  //set up sheet before sending it on it's way
  exportExcel(shift: number) {
    import("xlsx").then(xlsx => {
      let workbook: any;
      let fileName: string;

      //set up each workbook by which selection the user makes
      //TODO: trim down object to what's only necessary
      switch (shift) {
        //case 1: {
        //  fileName = "Shift1_Schedule_";
        //  const worksheet1 = xlsx.utils.json_to_sheet(this.scheduleShift1);
        //  workbook = { Sheets: { 'Shift 1': worksheet1 }, SheetNames: ['Shift 1'] };
        //  break;
        //}
        //case 2: {
        //  fileName = "Shift2_Schedule_";
        //  const worksheet2 = xlsx.utils.json_to_sheet(this.scheduleShift2);
        //  workbook = { Sheets: { 'Shift 2': worksheet2 }, SheetNames: ['Shift 2'] };
        //  break;
        //}
        //case 3: {
        //  fileName = "Shift3_Schedule_";
        //  const worksheet3 = xlsx.utils.json_to_sheet(this.scheduleShift3);
        //  workbook = { Sheets: { 'Shift 3': worksheet3 }, SheetNames: ['Shift 3'] };
        //  break;
        //}
        case 0: {
          fileName = "FullSchedule_";
          const worksheet1 = xlsx.utils.json_to_sheet(this.scheduleShift1);
          const worksheet2 = xlsx.utils.json_to_sheet(this.scheduleShift2);
          const worksheet3 = xlsx.utils.json_to_sheet(this.scheduleShift3);

          workbook = { Sheets: { 'Shift 1': worksheet1, 'Shift 2': worksheet2, 'Shift 3': worksheet3 }, SheetNames: ['Shift 1', 'Shift 2', 'Shift 3'] };
          break;
        }
      }
      //put each worksheet into the entire workbook using an array
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, fileName);
    });
  }

  //save file
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      let tempDateString: string = new Date().toLocaleDateString();
      let dateString = tempDateString ? tempDateString.replace("/", ".").replace("/", ".") : new Date().getTime();
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + dateString + EXCEL_EXTENSION);
    });
  }
}
