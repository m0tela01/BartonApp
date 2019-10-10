import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

export interface previousSchedule {
  weekday;
  weekend;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'BartonApp';

  scheds: previousSchedule[];
  cols: any[];

  constructor(public router: Router) {}

  ngOnInit() {
    this.getPreviousSchedules();
    this.intializeTable();

    console.log('home has been loaded');
  }

  onRunScheduler() {
    this.router.navigate(['/history', 12]);
  }

  intializeTable() {
    this.cols = [
      { field: 'weekday', header: 'Weekday' },
      { field: 'weekend', header: 'Weekend' }
    ];
  }

  //TODO: turn into service call
  getPreviousSchedules() {
    this.scheds = [
      { weekday: '9/1/19-9/7/19', weekend: '9/8/19-9/10/19' },
      { weekday: '9/10/19-9/17/19', weekend: '9/18/19-9/20/19' },
      { weekday: '9/20/19-9/27/19', weekend: '9/28/19-9/30/19' }
    ];
  }
}
