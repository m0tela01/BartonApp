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

  deletionDialog: boolean = false; // when employee is being deleted
  confirmDeletion: boolean = false; // confirm which employee will be deleted
  deleteClockNumber: number = null;
  deleteEmployee: EmployeeObject;

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
    this.clonedEmployees[employee.clockNumber] = { ...employee };
  }

  // invoked after edit is confirmed
  onRowEditSave(employee: EmployeeObject) {
    //TODO: Post a save to db
    delete this.clonedEmployees[employee.clockNumber];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee is updated' });
  }

  onRowEditCancel(employee: EmployeeObject, index: number) {
    this.employees[index] = this.clonedEmployees[employee.clockNumber];
    delete this.clonedEmployees[employee.clockNumber];
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

  onHideDialog() {
    this.newEmployee = null;
    this.displayDialog = false;
  }

  // #Region Delete Employee 
  onShowDeleteDialog() {
    this.deletionDialog = true;
  }

  onConfirmDeletion(clockNumber: number) {
    this.deleteEmployee = new EmployeeObject();
    if (this.employees.filter(emp => emp.clockNumber === clockNumber).length > 0) {
      // then the employee exist and show employee on screen
    } else {
      // give user a notice that user does not exist
    }

    this.confirmDeletion = true;
  }

  onDeleteEmployee() {
    //TODO: SEND POST TO DELETE EMPLOYEE
    //TODO: Get reload table
    this.deleteClockNumber = null;
  }

  //TODO: 1. Create dialog "Are you sure you want to delete" 2. Post a save to db
  //when an employee row is deleted
  onDeleteRow(employee: EmployeeObject) {
    delete this.clonedEmployees[employee.clockNumber];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee is updated' });
  }
}

