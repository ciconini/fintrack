import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardReportService } from '../../data-access/dashboard-report.service';
import { ReportResponse } from '../../../shared/model/response';

@Component({
    selector: 'app-expense-report',
    imports: [
        MatCardModule,
        NgxChartsModule
    ],
    templateUrl: './expense-report.component.html',
    styleUrl: './expense-report.component.scss'
})
export class ExpenseReportComponent implements OnInit {
  currDate: Date = new Date();

  // chart config
  xAxis: boolean = true;
  yAxis: boolean = true;
  results?: any[];

  constructor(
    private readonly service: DashboardReportService
  ) {
    
  }

  ngOnInit(): void {
    this.service.getExpensesReport().subscribe((resp: ReportResponse) => {
      this.results = resp.data;
      console.log("🚀 ~ ExpenseReportComponent ~ this.service.getExpensesReport ~ this.results:", this.results)
    })
  }
}
