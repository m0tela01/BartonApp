import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component/home.component';
import { SchedulerComponent } from './modules/scheduler/scheduler.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
