import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http'

import { MessageService } from 'primeng/api';

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

  //add job dialog variables
  addJobDialog: boolean = false;
  addJobName: string = '';

  //add new employee dialog variables
  newEmployee: EmployeeObject = new EmployeeObject();
  selectedJob: JobObject;
  displayDialog: boolean = false;

  //delete employee dialog variables
  deletionDialog: boolean = false; // dialog to find and delete employee
  confirmDeletion: boolean = false; // dialog to confirm which employee will be deleted
  deleteClockNumber: number = null;
  deleteEmployee: EmployeeObject;

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
          console.log(this.employees[0].jobName);
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

  //TODO: How can I update seniorityNumber? --> try an invisible column in the object like jobid
  onRowEditInit(employee: EmployeeObject) {
    this.clonedEmployees[employee.clockNumber] = { ...employee };
  }

  // Allows edited changes to be saved in the UI as an EmployeeObject. Takes an employee object as the one to be saved.
  // Invoked after edit is confirmed.
  onRowEditSave(employee: EmployeeObject) {
    this.updateEmployee(employee);
    //refresh employees
    this.getAllEmployees();
  }

  // Updates employee takes an employee object as a parameter. Retrives updated employees table if update was successful.
  // Used in onRowEditSave.
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

  // Allows edited changes to be discarded in the UI. Takes an employee object which is being edited.
  // Invoked if edit is not confirmed.
  onRowEditCancel(employee: EmployeeObject, index: number) {
    this.employees[index] = this.clonedEmployees[employee.clockNumber];
    delete this.clonedEmployees[employee.clockNumber];
  }

  //shows the add job dialog
  onShowAddJobDialog() {
    this.addJobDialog = true;
    this.addJobName = ''
  }

  //add job to job table 
  onAddJob() {
    let temp: Array<JobObject>;
    let newJob: JobObject = new JobObject();

    //verify fields exist
    if (this.addJobName && this.addJobName != '') {
      //verify job name doesn't already exist
      temp = this.jobs.filter(job => job.jobName == this.addJobName);
      if (temp && temp.length > 0) {
        this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'The job name already exist.' });
      } else {
        newJob.jobName = this.addJobName;
        newJob.jobId = this.jobs.length + 1;

        this.employeeService.insertJob(newJob).subscribe(
          res => {
            if (res) {
              this.getAllEmployees();
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The job was added.' });
            } else {
              this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'The job failed while attempting to be added.' });
            }
          }
        )
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Please enter a job name.' });
    }
  }

  //shows the add new employeeObject
  //initialize all data in the dialog
  onShowAddDialog() {
    this.newEmployee = new EmployeeObject();
    this.newEmployee.seniorityNumber = this.employees.length + 1;
    this.selectedJob = new JobObject();
    this.displayDialog = true;
  }

  //adds new employee to the employee table
  onAddNewEmployee() {
    //verify new employee is ready to be added
    if (this.newEmployee && this.employeeObjectCheck()) {
      this.employeeService.insertEmployee(this.newEmployee)
        .subscribe(
          res => {
            if (res) {
              this.getAllEmployees();
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was added.' });

              //once employee is added: refresh table, remove dialog contents, close dialog
              this.getAllEmployees;
              this.newEmployee = null;
              this.selectedJob = null;
              this.displayDialog = false;
            } else {
              this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be added.' });
            }
          }
        );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the the dialog' });
    }
  }

  //verify all fields are there
  employeeObjectCheck() {
    let isValid: boolean = true;
    this.newEmployee.absence = this.newEmployee.absence ? this.newEmployee.absence : '';
    this.newEmployee.restrictions = this.newEmployee.restrictions ? this.newEmployee.restrictions : '';

    // set job using data from drop down if it exist
    if (this.selectedJob.jobId && this.selectedJob.jobName) {
      this.newEmployee.jobId = this.selectedJob.jobId;
      this.newEmployee.jobName = this.selectedJob.jobName;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job for the employee.' });
      isValid = false;
    }

    if (!this.newEmployee.clockNumber) {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a clock number for the employee.' });
      isValid = false
    }
    if (!this.newEmployee.employeeName) {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a employee name for the employee.' });
      isValid = false
    }
    if (!this.newEmployee.seniorityNumber) {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please enter a seniority number for the employee.' });
      isValid = false
    }
    if (!this.newEmployee.shiftPreference) {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job for the employee.' });
      isValid = false
    } else if (this.newEmployee.shiftPreference == 0 || this.newEmployee.shiftPreference > 3) {
      //no actual error was discussed, but this could break the algorithm
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Employee is being assigned a shift preference other than 1, 2, or 3' });
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
    let temp = this.employees.filter(emp => emp.clockNumber == this.deleteClockNumber);

    console.log(this.employees);
    console.log(this.deleteClockNumber);
    console.log(temp);

    if (temp && temp.length > 0) {
      // then the employee exist and show employee on screen
      this.deleteEmployee = temp[0];
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
    this.employeeService.deleteEmployee(this.deleteEmployee)
      .subscribe(
        response => {
          if (response) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was deleted.' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be deleted.' });
          }
          this.getAllEmployees();
        }
      );

    this.deleteClockNumber = null;
    this.deleteEmployee = new EmployeeObject();
    this.deletionDialog = false;
    this.confirmDeletion = false;
  }
  // #EndRegion Delete Employee
}

