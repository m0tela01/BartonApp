import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';

import { ScheduleObject } from '../../core/models/ScheduleObject';
import { TemplateObject } from '../../core/models/TemplateObject';
import { EmployeeObject } from '../../core/models/EmployeeObject';
import { JobObject } from '../../core/models/JobObject';

import { SchedulerService } from '../../core/services/scheduler.service';
import { EmployeeService } from '../../core/services/employee.service';

export class EmployeeNote {
  clockNumber: number;
  reason: string;
  dateRanges: Date[];
  dateRangeString: string;
  note: string;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [MessageService]
})

export class SchedulerComponent implements OnInit {
  colsTemplate: any[];
  templates: Array<TemplateObject>;
  //clonedTemplates: { [s: string]: TemplateObject; } = {};

  //for restrictions footer and dialog
  employee: EmployeeNote = new EmployeeNote();
  restrictions: EmployeeNote[] = [];
  displayDialog: boolean = false;

  displayJobDialog: boolean = false;
  jobAdd: JobObject;
  allJobs: Array<JobObject>;

  constructor(public router: Router, private messageService: MessageService, private schedulerService: SchedulerService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getCurrentTemplate();
    this.initalizeTemplateTable();
    this.getJobs();

    console.log('scheduler has been loaded');
  }

  initalizeTemplateTable() {
    this.colsTemplate = [
      { field: 'jobName', header: 'Rated Job' },
      { field: 'departmentName', header: 'Department' },
      { field: 'shift1', header: 'Shift 1 Count' },
      { field: 'shift2', header: 'Shift 2 Count' },
      { field: 'shift3', header: 'Shift 3 Count' }
    ];
  }

  getCurrentTemplate() {
    this.schedulerService.getCurrentTemplate().subscribe(
      res => {
        if (res) {
          this.templates = res as Array<TemplateObject>;
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Scheduler Template data could not be loaded.' });
        }
      });
  }

  getJobs() {
    this.employeeService.getJobs().subscribe(
      res => {
        if (res) {
          this.allJobs = res as Array<JobObject>;
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'No job data found.' });
        }
      }
    )
  }

  onAddJob() {
    this.displayJobDialog = true;
    this.jobAdd = new JobObject();
  }

  onSaveAddJob() {
    let newJob: TemplateObject = new TemplateObject;

    if (this.jobAdd && this.jobAdd.jobId) {
      newJob.jobName = this.jobAdd.jobName;
      newJob.departmentName = '';
      newJob.jobId = this.jobAdd.jobId
      newJob.shift1 = 0;
      newJob.shift2 = 0;
      newJob.shift3 = 0;

      this.templates.push(newJob);
      this.displayJobDialog = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job.' });
    }
  }

  onRemoveJob() {
    let temp: Array<TemplateObject>;

    if (this.jobAdd && this.jobAdd.jobId) {
      //make sure job exist to be removed
      temp = this.templates.filter(t => t.jobName === this.jobAdd.jobName);
      if (temp && temp.length > 0) {
        let filtered: Array<TemplateObject>;
        filtered = this.templates.filter(t => t.jobName !== this.jobAdd.jobName);
        this.templates = filtered;

        this.displayJobDialog = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'The job could not be found in the template.' });
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job.' });
    }
  }

  showDialogToAdd() {
    this.employee = new EmployeeNote();
    this.displayDialog = true;
  }

  //when save is clicked for adding vacation/restriction
  save() {
    if (this.employee) {
      if (this.checkFields()) {
        //need a string version to show in footer
        let tmpStr: string = this.employee.dateRanges[0] ? this.employee.dateRanges[0].toLocaleDateString() : '';
        if (this.employee.dateRanges[1]) {
          this.employee.dateRangeString = tmpStr.concat(' ', this.employee.dateRanges[1].toLocaleDateString());
        } else {
          this.employee.dateRangeString = tmpStr;
        }

        this.restrictions.push(this.employee);
        this.employee = null;
        this.displayDialog = false;
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the dialog' });
    }
  }

  checkFields() {
    let isValid: boolean = true;

    if (!this.employee.clockNumber) {
      isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Clock Number' });
    }
    if (!this.employee.reason) {
      isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Reason' });
    }
    if (!this.employee.dateRanges) {
      isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Date Range' });
    }
    if (!this.employee.note) {
      isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Note' });
    }

    return isValid;
  }

  onExitDialog() {
    this.employee = null;
    this.displayDialog = false;
  }

  //TODO: insertNewTemplate called. if that works then send app to history table to generate the schedule
  onRunScheduler() {
    //NOTE: can pass data through the service
    this.schedulerService.insertNewTemplates(this.templates).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.schedulerService.setIsFromScheduler(true);
          this.router.navigate(['/history']);
        } else {
          console.log('no no');
          console.log(res);
        }
      }
    );
  }
}
