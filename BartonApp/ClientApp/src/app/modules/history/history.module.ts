import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule, TableBody } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component/history.component'


@NgModule({
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    ToastModule,
    ProgressSpinnerModule,

    HistoryRoutingModule
  ],
  declarations: [
    HistoryComponent
  ]
})
export class HistoryModule { }
