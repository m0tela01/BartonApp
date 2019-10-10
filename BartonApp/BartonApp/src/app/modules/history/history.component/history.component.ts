import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  testObserv$: Observable<any>;
  test: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.testObserv$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.test = params.get('id')))
    );
    console.log('history has been loaded');
  }

  onTestClick() {
    console.log(this.test);
  }

  onTestyTest() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.test = params.get('id')))
    );
  }
}
