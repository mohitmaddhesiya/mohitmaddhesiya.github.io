import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  routeChange(name){
    if (name === 'bar'){
      this.router.navigate(['admin/anlytics']);
    }else{
      this.router.navigate(['admin//line-chart']);

    }
  }

}
