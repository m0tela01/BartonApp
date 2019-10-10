import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'

import { HomeComponent } from './home.component/home.component';


@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
