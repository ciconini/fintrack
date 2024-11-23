import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpenseResponse } from '../expenses/util/model/expense';
import { Subscription } from 'rxjs';
import { ExpensesService } from '../expenses/data-access/expenses.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExpenseReportComponent } from './feature/expense-report/expense-report.component';
import { TaxReportComponent } from './feature/tax-report/tax-report.component';
import { IncomeReportComponent } from './feature/income-report/income-report.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    ExpenseReportComponent,
    TaxReportComponent,
    IncomeReportComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  _expenseSub: Subscription = new Subscription;
  expenseResponse?: ExpenseResponse;

  constructor(
    private expenseService: ExpensesService
  ) {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
