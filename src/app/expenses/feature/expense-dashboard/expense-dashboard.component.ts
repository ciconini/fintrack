import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { FilterOptions } from '../../../shared/model/filter-options';
import {
  MatDialog
} from '@angular/material/dialog';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';
import { Subscription } from 'rxjs';
import { Expense, ExpenseResponse } from '../../util/model/expense';
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
  expensesResponse?: ExpenseResponse;
  expenseFields: ExpensesTableFields = new ExpensesTableFields;
  
  constructor(
    public dialog: MatDialog,
    private expenseService: ExpensesService
  ){}

  ngOnInit(): void {
    this.getExpenses();
  }

  public openExpenseDetailModal(id?: Event): void {
    const dialogRef = this.dialog.open(ExpenseDetailComponent, {
      width: '320px',
      panelClass: 'add-modal',
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.event !== 'cancel') {
        this.getExpenses();
      }
    });
  }

  private getExpenses(): void {
    this._expensesSub = this.expenseService.getExpenses().subscribe((resp: ExpenseResponse) => {
      this.expensesResponse = resp;
    });
  }

  ngOnDestroy(): void {
    this._dialogSub.unsubscribe();
    this._expensesSub.unsubscribe();
  }
}
