import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Router, RouterLink } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ScheduleObject } from '../../core/models/ScheduleObject';
import { TemplateObject } from '../../core/models/TemplateObject';
import { MessageService } from 'primeng/api';
import { EmployeeObject } from '../../core/models/EmployeeObject';
import { SchedulerService } from '../../core/services/scheduler.service';

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
  clonedTemplates: { [s: string]: TemplateObject; } = {};

  //for restrictions footer and dialog
  employee: EmployeeNote = new EmployeeNote();
  restrictions: EmployeeNote[] = [];
  displayDialog: boolean = false;


  constructor(public router: Router, private httpService: HttpClient, private messageService: MessageService, private schedulerService: SchedulerService) { }

  ngOnInit() {
    this.getCurrentTemplate();
    this.initalizeTemplateTable();

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
          //TODO: add toast for no info found
          console.log("no data found");
        }
      });
  }

  onRowEditInit(template: TemplateObject) {
    this.clonedTemplates[template.jobName] = { ...template };
  }

  onRowEditSave(template: TemplateObject) {
    delete this.clonedTemplates[template.jobName];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
  }

  onRowEditCancel(template: TemplateObject, index: number) {
    this.templates[index] = this.clonedTemplates[template.jobName];
    delete this.clonedTemplates[template.jobName];
  }

  showDialogToAdd() {
    this.employee = new EmployeeNote();
    this.displayDialog = true;
  }

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

  exitDialog() {
    this.employee = null;
    this.displayDialog = false;
  }
}
