import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http'

import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';

import { registerLocaleData } from '@angular/common';
import { Observable } from 'rxjs';

import { EmployeeObject } from '../../../core/models/EmployeeObject';
import { JobObject } from '../../../core/models/JobObject';
import { SchedulerService } from '../../../core/services/scheduler.service';
import { EmployeeService } from '../../../core/services/employee.service';

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

  jobs: Array<JobObject>;

  newEmployee: EmployeeObject = new EmployeeObject();
  selectedJob: JobObject;
  displayDialog: boolean = false;

  deletionDialog: boolean = false; // when employee is being deleted
  confirmDeletion: boolean = false; // confirm which employee will be deleted
  deleteClockNumber: number = null;
  deleteEmployee: EmployeeObject;
  deletionDialogMessage: string = '';

  constructor(public router: Router, private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAllEmployees();
    this.getJobs();
    console.log('employees has been loaded');
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      res => {
        if (res) {
          this.employees = res as Array<EmployeeObject>;
          console.log(this.employees[0].jobName);    //debugging - sanity check: remove
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'No employee data found.' });
        }
      });
  }

  getJobs() {
    this.employeeService.getJobs().subscribe(
      res => {
        if (res) {
          this.jobs = res as Array<JobObject>;
          console.log(this.jobs);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'No job data found.' });
        }
      }
    )
  }

  //TODO: How can I update seniorityNumber?
  onRowEditInit(employee: EmployeeObject) {
    this.clonedEmployees[employee.clockNumber] = { ...employee };
  }

  // invoked after edit is confirmed
  onRowEditSave(employee: EmployeeObject) {
    this.updateEmployee(employee);
  }

  updateEmployee(employee: EmployeeObject) {
    this.employeeService.updateEmployeeById(employee)
      .subscribe(
        response => {
          console.log("update and get");

          if (response) {
            this.getAllEmployees();

            delete this.clonedEmployees[employee.clockNumber];
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was updated' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be updated' });
          }
        }
      );
  }

  onRowEditCancel(employee: EmployeeObject, index: number) {
    this.employees[index] = this.clonedEmployees[employee.clockNumber];
    delete this.clonedEmployees[employee.clockNumber];
  }

  //TODO: Create post for new employee
  onShowAddDialog() {
    this.newEmployee = new EmployeeObject();
    this.newEmployee.seniorityNumber = this.employees.length + 1;
    this.selectedJob = new JobObject();
    this.displayDialog = true;
  }

  onAddNewEmployee() {
    if (this.newEmployee && this.employeeObjectCheck()) {
      this.employeeService.insertEmployee(this.newEmployee)
        .subscribe(
          response => {
            console.log("add and get");
            console.log(response);

            if (response) {
              this.getAllEmployees();
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was added.' });
            } else {
              this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be added.' });
            }
          }
        );
      this.newEmployee = null;
      this.selectedJob = null;
      this.displayDialog = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the the dialog' });
    }
  }

  //TODO: verify all fields are there (MAY NOT BE NEEDED)
  employeeObjectCheck() {
    let isValid: boolean = true;
    this.newEmployee.absence = this.newEmployee.absence ? this.newEmployee.absence : '';
    this.newEmployee.restrictions = this.newEmployee.restrictions ? this.newEmployee.restrictions : '';

    // set job using data from drop down if it exist
    if (this.selectedJob.jobId && this.selectedJob.jobName) {
      this.newEmployee.jobId = this.selectedJob.jobId;
      this.newEmployee.jobName = this.selectedJob.jobName;
    } else {
      isValid = false;
    }

    if (!this.newEmployee.clockNumber) {
      isValid = false
    } else if (!this.newEmployee.employeeName) {
      isValid = false
    } else if (!this.newEmployee.seniorityNumber) {
      isValid = false
    } else if (!this.newEmployee.shiftPreference) {
      isValid = false
    } 

    return isValid;
  }

  onHideDialog() {
    this.newEmployee = null;
    this.selectedJob = null;
    this.displayDialog = false;
  }

  // #Region Delete Employee 
  onShowDeleteDialog() {
    this.deletionDialog = true;
  }

  onConfirmDeletion() {
    this.deleteEmployee = new EmployeeObject();
    if (this.employees.filter(emp => emp.clockNumber === this.deleteClockNumber).length > 0) {
      // then the employee exist and show employee on screen
      this.deleteEmployee = this.employees.filter(emp => emp.clockNumber === this.deleteClockNumber)[0];
      this.deletionDialogMessage = 'Seniority Number: ' + this.deleteEmployee.seniorityNumber.toString + ' | Clock Number: ' + this.deleteEmployee.clockNumber.toString + ' | Name: ' + this.deleteEmployee.employeeName + ' | Job Name: ' + this.deleteEmployee.jobName;
      this.confirmDeletion = true;
    } else {
      // give user a notice that user does not exist
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Employee was not found.' });
    }
  }

  //cancel button invokes this method to clean up and dismiss dialog
  onCancelDelete() {
    this.deleteClockNumber = null;
    this.deleteEmployee = new EmployeeObject();
    this.deletionDialog = false;
  }

  //delete button inside the deletion dialog to remove employee from table
  onDeleteEmployee() {
    //TODO: SEND POST TO DELETE EMPLOYEE
    //TODO: Get reload table
    this.deleteClockNumber = null;
    this.deleteEmployee = new EmployeeObject();
    this.deletionDialog = false;
  }
}

