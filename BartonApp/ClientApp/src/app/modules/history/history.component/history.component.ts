import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

import { SchedulerService } from '../../../core/services/scheduler.service';

import { ScheduleObject } from '../../../core/models/ScheduleObject';
import { EmployeeNoteObject } from '../../../core/models/EmployeeNoteObject';
import { FullScheduleObject } from '../../../core/models/FullScheduleObject';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [MessageService]
})
export class HistoryComponent implements OnInit {
  //variables received from api calls
  fullSchedule: FullScheduleObject = new FullScheduleObject;
  schedules: Array<ScheduleObject> = [];
  vacations: Array<EmployeeNoteObject> = [];

  //schedules derived from fullSchedule.schedules
  //rowGroupMetadata is utilized in the row grouping method for displaying the table
  scheduleShift1: Array<ScheduleObject> = [];
  rowGroupMetadata1: any = {};
  scheduleShift2: Array<ScheduleObject> = [];
  rowGroupMetadata2: any = {};
  scheduleShift3: Array<ScheduleObject> = [];
  rowGroupMetadata3: any = {};

  //vacations are derived from fullSchedule.vacations
  vacations1: Array<EmployeeNoteObject> = [];
  vacations2: Array<EmployeeNoteObject> = [];
  vacations3: Array<EmployeeNoteObject> = [];
  vacationNotScheduled: Array<EmployeeNoteObject> = [];

  //holds values for if there is anything in the vacation array to be utilized
  //tables are only rendered if data is in the vacation array for that shift
  isVacation1: boolean = false;
  isVacation2: boolean = false;
  isVacation3: boolean = false;
  isVacationNotScheduled: boolean = false;

  showSpinner: boolean = false;

  constructor(private messageService: MessageService, private schedulerService: SchedulerService) { }

  ngOnInit() {
    this.getCurrentSchedules();
    //console.log('history has been loaded');
  }

  //gets the current schedule
  //utilized everytime page opens due to the schedule being generated on the scheduler page before being routed here
  private async getCurrentSchedules() {
    this.schedulerService.getFullSchedule().subscribe(
      res => {
        if (res) {
          //console.log(res);
          this.fullSchedule = res as FullScheduleObject;

          if (this.fullSchedule.schedules && this.fullSchedule.schedules.length > 0) {
            this.formatData(this.fullSchedule);
          } else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed to retreive the current schedule.' });
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed to retreive the full schedule.' });
        }
      }
    )
  }

  //formats the data retrieved from the api
  //separates schedules, sorts them, and calls row grouping for displaying in markup and excel
  //separates vacations 
  formatData(fullSchedule: FullScheduleObject) {
    this.schedules = fullSchedule.schedules;
    this.vacations = fullSchedule.employeeNotes ? fullSchedule.employeeNotes : [];

    //sort job names and shift
    this.schedules.sort(function (a, b) {
      return a.jobName.localeCompare(b.jobName);
    });
    this.schedules.sort(function (a, b) { return a.shift - b.shift });

    //turn entire schedule into 3 separate schedules
    this.separateSchedules();

    if (this.vacations && this.vacations.length > 0) {
      this.separateVacations();
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'No vacations were found.' });
    }

    //run the rowgroup method to create each table
    this.rowGroupMetadata1 = this.updateRowGroupMetaData(this.scheduleShift1);
    this.rowGroupMetadata2 = this.updateRowGroupMetaData(this.scheduleShift2);
    this.rowGroupMetadata3 = this.updateRowGroupMetaData(this.scheduleShift3);
  }

  //utilized in the table
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

  //sorts by jobs for rowGrouping --documentation can be found on rowGroup for primeng
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

  separateVacations() {
    this.vacations.forEach(s => {
      if (s.isEligible == true) {
        switch (s.shift) {
          case 1: {
            this.vacations1.push(s)
            break;
          }
          case 2: {
            this.vacations2.push(s)
            break;
          }
          case 3: {
            this.vacations3.push(s)
            break;
          }
        }
      } else {
        this.vacationNotScheduled.push(s);
      }
    });
    //dictates whether the vacation table is shown
    if (this.vacations1 && this.vacations1.length > 0) {
      this.isVacation1 = true;
    }
    if (this.vacations2 && this.vacations2.length > 0) {
      this.isVacation2 = true;
    }
    if (this.vacations3 && this.vacations3.length > 0) {
      this.isVacation3 = true;
    }
    if (this.vacationNotScheduled && this.vacationNotScheduled.length > 0) {
      this.isVacationNotScheduled = true;
    }
  }

  //set up workbook before saving it
  exportExcel() {
    this.showSpinner = true;
    import("xlsx").then(xlsx => {
      let workbook: any;
      let fileName: string;

      //set up each workbook 
      fileName = "FullSchedule_";
      const worksheet1 = xlsx.utils.json_to_sheet(this.scheduleShift1);
      const worksheet2 = xlsx.utils.json_to_sheet(this.scheduleShift2);
      const worksheet3 = xlsx.utils.json_to_sheet(this.scheduleShift3);

      //there are any vacations just give them all because its unnecessary to run through all the possible options
      if (this.vacations && this.vacations.length > 0) {
        const vacayWorksheet1 = xlsx.utils.json_to_sheet(this.vacations1);
        const vacayWorksheet2 = xlsx.utils.json_to_sheet(this.vacations2);
        const vacayWorksheet3 = xlsx.utils.json_to_sheet(this.vacations3);
        const notScheduledWorksheet3 = xlsx.utils.json_to_sheet(this.vacationNotScheduled);

        workbook = {
          Sheets: { 'Shift 1': worksheet1, 'Shift 2': worksheet2, 'Shift 3': worksheet3, 'Vacations 1': vacayWorksheet1, 'Vacations 2': vacayWorksheet2, 'Vacations 3': vacayWorksheet3, 'Not Scheduled': notScheduledWorksheet3 },
          SheetNames: ['Shift 1', 'Shift 2', 'Shift 3', 'Vacations 1', 'Vacations 2', 'Vacations 3', 'Not Scheduled']
        };
      } else {
        workbook = {
          Sheets: { 'Shift 1': worksheet1, 'Shift 2': worksheet2, 'Shift 3': worksheet3 },
          SheetNames: ['Shift 1', 'Shift 2', 'Shift 3']
        };
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
      this.showSpinner = false;
    });
  }
}
