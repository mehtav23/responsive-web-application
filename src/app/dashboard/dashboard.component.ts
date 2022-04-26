import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data = [];
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getData().subscribe((response) => {
      console.log(response) 
       this.data = response?.data || [];
       this.sort('price');
    });
  }


  sort(category: string) {
    this.data.sort((a, b) => {
      return a[category] > b[category] ? 1 : -1
    });
  }




}
