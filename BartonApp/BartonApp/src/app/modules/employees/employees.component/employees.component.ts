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
            { field: 'seniorityNumber', header: 'Seniority Number' },
            { field: 'clockNumber', header: 'Clock Number' },
            { field: 'seniorityDate', header: 'Seniority Date' },
            { field: 'employeeName', header: 'Employee Name' },
            { field: 'shiftPreference', header: 'Shift Preference' },
            { field: 'jobName', header: 'Job Name' },
            { field: 'departmentName', header: 'Department Name' },
            //{ field: 'prebuiltHours', header: 'PrebuiltHours' },
            //{ field: 'weekendOTHours', header: 'WeekendOTHours' },
            //{ field: 'totalHours', header: 'TotalHours' }
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

