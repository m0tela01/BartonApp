import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component/employees.component'


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,

    TableModule
  ],
  declarations: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }
