import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { EmployeeObject } from '../../../core/models/EmployeeObject';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SchedulerService } from '../../../core/services/scheduler.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    providers: [MessageService]
})

export class EmployeesComponent implements OnInit {
    cols: any[];
    employees: Array<EmployeeObject>;
    clonedEmployees: { [s: string]: EmployeeObject; } = {};

    newEmployee: EmployeeObject = new EmployeeObject();
    displayDialog: boolean = false;

  constructor(public router: Router, private employeeService: EmployeeService, private messageService: MessageService) { }

    ngOnInit() {
        this.getAllEmployees();
        //this.intializeEmployeeTable();
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
            { field: 'absence', header: 'Absence' },
            { field: 'restrictions', header: 'Restrictions' },
            //{ field: 'departmentName', header: 'Department Name' },
            //{ field: 'prebuiltHours', header: 'PrebuiltHours' },
            //{ field: 'weekendOTHours', header: 'WeekendOTHours' },
            //{ field: 'totalHours', header: 'TotalHours' }
        ];
    }


  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      res => {
        if (res) {
          this.employees = res as Array<EmployeeObject>;
          console.log(this.employees[0].jobName);    //debugging - sanity check: remove
        } else {
          //TODO: add toast for no info found
          console.log("no data");
        }
      });
  }

  //TODO: How can I update seniorityNumber?
  onRowEditInit(employee: EmployeeObject) {
    this.clonedEmployees[employee.seniorityNumber] = { ...employee };
  }

  //TODO: 1. Create dialog "Are you sure you want to update" 2. Post a save to db
  onRowEditSave(employee: EmployeeObject) {
    delete this.clonedEmployees[employee.seniorityNumber];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee is updated' });
  }

  onRowEditCancel(employee: EmployeeObject, index: number) {
    this.employees[index] = this.clonedEmployees[employee.seniorityNumber];
    delete this.clonedEmployees[employee.seniorityNumber];
  }

  //TODO: Create post for new employee
  onAddNewEmployee() {
    this.newEmployee = new EmployeeObject();
    this.displayDialog = true;
  }

  save() {
    if (this.newEmployee && this.employeeObjectCheck()) {
      //TODO: Create post to add new employee
      //this.employeeService.addNewEmployee(this.newEmployee)
      this.newEmployee = null;
      this.displayDialog = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the the dialog' })
    }
  }

  //TODO: verify all fields are there (MAY NOT BE NEEDED)
  employeeObjectCheck() {
    return true;
  }

  exitDialog() {
    this.newEmployee = null;
    this.displayDialog = false;
  }

}

