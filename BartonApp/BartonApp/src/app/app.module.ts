import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import {AppComponent} from './app.component'
import { AppRoutingModule } from './app-routing.module';

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
    TableModule
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
