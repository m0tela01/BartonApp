import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

//for scheduler component
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.server.module';

import { SchedulerComponent } from './modules/scheduler/scheduler.component';
import { MenuComponent } from './core/menu/menu.component';

import { HomeModule } from './modules/home/home.module'
import { EmployeesModule } from './modules/employees/employees.module';
import { HistoryModule } from './modules/history/history.module'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    EmployeesModule,
    HomeModule,
    HistoryModule,

    AppRoutingModule,
    HttpClientModule,
    BrowserModule,

    ButtonModule,
    TableModule,

    CalendarModule,
    DialogModule,
    BrowserAnimationsModule,

    FormsModule
  ],
  declarations: [
    AppComponent,
    SchedulerComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
