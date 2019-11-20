import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Router, RouterLink } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ScheduleObject } from '../../core/models/ScheduleObject';
import { TemplateObject } from '../../core/models/TemplateObject';
import { MessageService } from 'primeng/api';
import { EmployeeObject } from '../../core/models/EmployeeObject';

export class EmployeeNote {
  employeeId: number;
  reason: string;
  dateRanges: Date[];
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


  constructor(public router: Router, private httpService: HttpClient, private messageService: MessageService) { }

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
    this.httpService.get('http://localhost:8888/api/BartonData/GetCurrentTemplate').subscribe(
      data => {
        this.templates = data as Array<TemplateObject>;
        console.log(this.templates[0].departmentName);    //debugging - sanity check: remove
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
      this.restrictions.push(this.employee);
      this.employee = null;
      this.displayDialog = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the the dialog' })
    }
  }

  exitDialog() {
    this.employee = null;
    this.displayDialog = false;
  }
}
