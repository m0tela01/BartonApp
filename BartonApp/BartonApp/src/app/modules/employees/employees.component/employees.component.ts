import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { EmployeeObject } from '../../../core/models/EmployeeObject';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
    cols: any[];
    employees: Array<EmployeeObject>;

    constructor(public router: Router, private httpService: HttpClient, private zone: NgZone) { }

    ngOnInit() {
        this.getAllEmployees();
        this.intializeEmployeeTable();
        console.log('employees has been loaded');
    }

    intializeEmployeeTable() {
        this.cols = [
            { field: 'seniorityNumber', header: 'SeniorityNumber' },
            { field: 'clockNumber', header: 'ClockNumber' },
            { field: 'seniorityDate', header: 'SeniorityDate' },
            { field: 'employeeName', header: 'EmployeeName' },
            { field: 'shiftPreference', header: 'ShiftPreference' },
            { field: 'jobName', header: 'JobName' },
            { field: 'departmentName', header: 'DepartmentName' },
            { field: 'prebuiltHours', header: 'PrebuiltHours' },
            { field: 'weekendOTHours', header: 'WeekendOTHours' },
            { field: 'totalHours', header: 'TotalHours' }
        ];
    }

    getAllEmployees() {
        this.httpService.get('https://localhost:44392/api/BartonData/GetEmployeeData').subscribe(
          data => {
              this.employees = data as Array<EmployeeObject>;
              console.log(this.employees[0].departmentName);    //debugging - sanity check: remove
            });
    }
}

