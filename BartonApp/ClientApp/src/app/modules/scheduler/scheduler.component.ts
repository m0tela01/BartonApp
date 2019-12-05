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
import { EmployeeNoteObject } from '../../core/models/EmployeeNoteObject';

import { SchedulerService } from '../../core/services/scheduler.service';
import { EmployeeService } from '../../core/services/employee.service';

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

  //for vacations footer and dialog
  employeeNote: EmployeeNoteObject = new EmployeeNoteObject();
  vacations: EmployeeNoteObject[] = [];
  displayDialog: boolean = false;

  displayJobDialog: boolean = false;
  jobAdd: JobObject;
  allJobs: Array<JobObject>;

  dateRanges: Date[] = [new Date()];

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
          console.log(res)
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
          console.log(res)
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

  //Showing Add Vacation Dialog
  showDialogToAdd() {
    this.employeeNote = new EmployeeNoteObject();
    this.dateRanges = [new Date()];
    this.displayDialog = true;
  }

  //when save is clicked for adding vacation
  save() {
    if (this.employeeNote) {
      if (this.checkFields()) {
        //need a string version to show in footer
        this.employeeNote.setDateRange(this.dateRanges);

        this.vacations.push(this.employeeNote);
        this.employeeNote = null;
        this.dateRanges = [new Date()];
        this.displayDialog = false;
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the dialog' });
    }
  }

  checkFields() {
    let isValid: boolean = true;

    if (!this.employeeNote.clockNumber) {
      isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Clock Number' });
    }
    if (!this.dateRanges || !this.dateRanges[0]) {
      isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Date Range' });
    }
    //this was removed due to only using vacations here (rather than restrictions)
    //if (!this.employeeNote.note) {
    //  isValid = false;
    //  this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Note' });
    //}

    return isValid;
  }

  //executed when vacation dialog closes
  onExitDialog() {
    this.employeeNote = null;
    this.displayDialog = false;
  }

  //When running the scheduler insertNewTemplate is called
  //if that works then send app to history table to generate the schedule
  onRunScheduler() {
    this.schedulerService.insertNewTemplates(this.templates).subscribe(
      res => {
        if (res) {
          //then insert employeeNotes
          //in the future this should be refactored to be two separate async calls
          this.schedulerService.insertEmployeeNotes(this.vacations).subscribe(
            res2 => {
              if (res2) {
                this.generateWeekdaySchedule();
              } else {
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Insert Employee Vacations failed.' });
              }
            }
          )
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Insert Templates failed.' });
        }
      }
    );
  }

  //generate schedule and send to history table
  private generateWeekdaySchedule() {
    console.log('starting to generate schedule');
    this.schedulerService.generateWeekdaySchedule().subscribe(
      res => {
        if (res) {
          this.router.navigate(['/history']);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed to generate the schedule.' });
        }
      }
    )
  }
}
