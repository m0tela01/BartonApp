import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';

export interface Employee {
  id: number;
  name: string;
  role: string;
  shiftPreference: number;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  cols: any[];
  employees: any[];

  constructor(public router: Router) {}

  ngOnInit() {
    this.getAllEmployees();
    this.intializeTable();
    console.log('employees has been loaded');
  }

  intializeTable() {
    this.cols = [
      { field: '', header: '' },
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'role', header: 'Role' },
      { field: 'shiftPreference', header: 'Shift Pref.' }
    ];
  }

  getAllEmployees() {
    this.employees = [
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' }
    ];
  }
}