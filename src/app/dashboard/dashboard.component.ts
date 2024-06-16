import { Component, OnDestroy, OnInit } from '@angular/core';
import { Expense, ExpenseType } from '../expenses/util/model/expense';
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
  ExpenseTypes = ExpenseType;
  _expenseSub: Subscription = new Subscription;
  expenses: Expense[] = [];

  constructor(
    private expenseService: ExpensesService
  ) {}

  ngOnInit(): void {
    this._expenseSub = this.expenseService.getExpenses().subscribe((resp:Expense[]) => {
      this.expenses = resp;
    })
  }

  ngOnDestroy(): void {
    this._expenseSub.unsubscribe();
  }
}
