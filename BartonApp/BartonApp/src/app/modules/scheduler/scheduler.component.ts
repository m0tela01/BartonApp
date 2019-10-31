import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Router, RouterLink } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ScheduleObject } from '../../core/models/ScheduleObject';
import { TemplateObject } from '../../core/models/TemplateObject';


export interface scheduleCreate {
  job: string;
  departmentName: string;
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
  colsTemplate: any[];
  templates: Array<TemplateObject>;
  clonedScheds: { [s: string]: TemplateObject; } = {};

  //, private messageService: MessageService
  constructor(public router: Router, private httpService: HttpClient) { }

    ngOnInit() {
        this.getPreviousSchedules();  //?? Why is this in the schedule? should be in history ??

        this.getCurrentTemplate();
        this.initalizeTemplateTable();

        console.log('scheduler has been loaded');
    }

    initalizeTemplateTable() {
      this.colsTemplate = [
          { field: 'jobName', header: 'Rated Job'},
          { field: 'departmentName', header: 'Department'},
          { field: 'shift1', header: 'Shift 1 Count'},
          { field: 'shift2', header: 'Shift 2 Count'},
          { field: 'shift3', header: 'Shift 3 Count'}
      ];
    }

    getCurrentTemplate() {
        this.httpService.get('https://localhost:44392/api/BartonData/GetCurrentTemplate').subscribe(
          data => {
              this.templates = data as Array<TemplateObject>;
              console.log(this.templates[0].departmentName);    //debugging - sanity check: remove
          });
    }


  getPreviousSchedules() {
    //this.scheds = [
    //  { job: 'Filler', s1: 8, s2: 7, s3: 6 },
    //  { job: 'Case Feeder', s1: 9, s2: 7, s3: 7 },
    //  { job: 'Testy Test', s1: 6, s2: 1, s3: 9 },
    //  { job: 'Money Mikes', s1: 8, s2: 4, s3: 8 }
    //];
  }

  onRowEditInit(car: TemplateObject) {
    //this.clonedScheds[car.job] = { ...car };
  }

  onRowEditSave(car: TemplateObject) {
    //delete this.clonedScheds[car.job];
    //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
  }

  onRowEditCancel(car: TemplateObject, index: number) {
    //this.templates[index] = this.clonedScheds[car.job];
    //delete this.clonedScheds[car.job];
  }
}
