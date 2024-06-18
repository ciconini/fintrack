import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { FilterOptions } from '../../../shared/model/filter-options';
import {
  MatDialog
} from '@angular/material/dialog';
import { ExpenseAddComponent } from '../expense-add/expense-add.component';
import { Subscription } from 'rxjs';
import { Expense } from '../../util/model/expense';
import { ExpensesService } from '../../data-access/expenses.service';
import { DataTableComponent } from '../../../shared/ui/data-table/data-table.component';
import { ExpensesTableFields } from '../../../shared/model/table';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-expense-dashboard',
  standalone: true,
  imports: [
    ButtonComponent, 
    DataTableComponent,
    MatButton
  ],
  templateUrl: './expense-dashboard.component.html',
  styleUrl: './expense-dashboard.component.scss'
})
export class ExpenseDashboardComponent implements OnInit, OnDestroy{
  filterOptions: FilterOptions = new FilterOptions();
  _dialogSub: Subscription = new Subscription();
  _expensesSub: Subscription = new Subscription();
  expenses: Expense[] = [];
  expenseFields: ExpensesTableFields = new ExpensesTableFields;
  
  constructor(
    public dialog: MatDialog,
    private expenseService: ExpensesService
  ){}

  ngOnInit(): void {
    this.getExpenses();
  }

  public addNewExpense(): void {
    const dialogRef = this.dialog.open(ExpenseAddComponent, {
      width: '320px',
      panelClass: 'add-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getExpenses();
      }
    });
  }

  private getExpenses(): void {
    this._expensesSub = this.expenseService.getExpenses().subscribe((resp: Expense[]) => {
      this.expenses = resp;
    });
  }

  ngOnDestroy(): void {
    this._dialogSub.unsubscribe();
    this._expensesSub.unsubscribe();
  }
}
