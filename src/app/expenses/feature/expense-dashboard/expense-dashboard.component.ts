import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { FilterOptions } from '../../../shared/model/filter-options';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';
import { Subscription } from 'rxjs';
import { ExpenseResponse } from '../../util/model/expense';
import { ExpensesService } from '../../data-access/expenses.service';
import { DataTableComponent } from '../../../shared/ui/data-table/data-table.component';
import { ExpensesTableFields } from '../../../shared/model/table';
import { ActionBarComponent } from '../../../shared/ui/action-bar/action-bar.component';
import { TypesService } from '../../../shared/data-access/types.service';
import { ValueType } from '../../../shared/model/types';
import { CommonModule } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-expense-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent, 
    DataTableComponent,
    ActionBarComponent,
    MatPaginator
  ],
  templateUrl: './expense-dashboard.component.html',
  styleUrl: './expense-dashboard.component.scss'
})
export class ExpenseDashboardComponent implements OnInit, OnDestroy{
  filterOptions: FilterOptions = new FilterOptions();
  _dialogSub: Subscription = new Subscription();
  _expensesSub: Subscription = new Subscription();
  _typeSub: Subscription = new Subscription();
  expensesResponse?: ExpenseResponse;
  expenseFields: ExpensesTableFields = new ExpensesTableFields;
  typeOptions: ValueType[] = [];
  expensesValue: number = 0;
  
  constructor(
    public dialog: MatDialog,
    private expenseService: ExpensesService,
    private readonly typeService: TypesService,
  ){}

  ngOnInit(): void {
    if (localStorage.getItem('filters')){
      this.filterOptions = { ...JSON.parse(localStorage.getItem('filters') as string)}
    }
    this.getExpenses();
    this.getTypeOptions();
  }

  public openExpenseDetailModal(id?: Event): void {
    const dialogRef = this.dialog.open(ExpenseDetailComponent, {
      width: '320px',
      panelClass: 'add-modal',
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("🚀 ~ ExpenseDashboardComponent ~ dialogRef.afterClosed ~ result:", result)
      if(result.event !== 'cancel') {
        this.getExpenses();
      }
    });
  }

  public filterChanges(): void {
    localStorage.setItem('filters', JSON.stringify({
      type: this.filterOptions.type,
      dateEnd: this.filterOptions.dateEnd,
      dateStart: this.filterOptions.dateStart,
      order: this.filterOptions.order
    }));
    this.getExpenses();
  }

  private getExpenses(): void {
    this._expensesSub = this.expenseService.filterExpenses(this.filterOptions).subscribe((resp: ExpenseResponse) => {
      this.expensesResponse = resp;
      this.getExpensesValue();
    });
  }

  public getTypeOptions(): void {
    this._typeSub = this.typeService.getTypes().subscribe((types) => {
      this.typeOptions = types;
    })
  }

  private getExpensesValue(): void {
    this.expenseService.getExpenseValue(this.filterOptions).subscribe((resp: number) => {
      this.expensesValue = resp
    })
  }

  public handlePageEvent(event: PageEvent) {
    this.filterOptions.page = event.pageIndex;
    this.filterChanges()
  }

  ngOnDestroy(): void {
    this._dialogSub.unsubscribe();
    this._expensesSub.unsubscribe();
  }
}
