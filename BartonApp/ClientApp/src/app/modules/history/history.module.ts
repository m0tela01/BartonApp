import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { TableModule, TableBody } from 'primeng/table';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component/history.component'


@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    HistoryRoutingModule,
    TableModule
  ],
  declarations: [
    HistoryComponent
  ]
})
export class HistoryModule { }
