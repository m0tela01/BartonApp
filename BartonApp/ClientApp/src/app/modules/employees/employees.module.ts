import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component/employees.component'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    EmployeesRoutingModule,
    FormsModule,
    ToastModule,
    ProgressSpinnerModule,

    ButtonModule,
    DialogModule,
    TableModule
  ],
  declarations: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }
