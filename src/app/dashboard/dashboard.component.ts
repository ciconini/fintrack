import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpenseResponse } from '../expenses/util/model/expense';
import { Subscription } from 'rxjs';
import { ExpensesService } from '../expenses/data-access/expenses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
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
    this._expenseSub = this.expenseService.getExpenses().subscribe((resp:ExpenseResponse) => {
      this.expenseResponse = resp;
    })
  }

  ngOnDestroy(): void {
    this._expenseSub.unsubscribe();
  }
}
