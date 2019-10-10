import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

export enum menu {
  home = 1,
  scheduler = 2,
  employees = 3,
  history = 4
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  menuChange(event: any) {

    console.log(event);

    switch(event) {
      case (menu.home): {
        this.router.navigate(['home']);
        break;     
      }
      case (menu.scheduler): {
        this.router.navigate(['scheduler']);
        break;     
      }
      case (menu.employees): {
        this.router.navigate(['employees']);
        break;
      }
      case (menu.history): {
        this.router.navigate(['history']);
        break;
      }
    }
  }
}