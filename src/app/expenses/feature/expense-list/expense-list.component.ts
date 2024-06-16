import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FilterOptions } from '../../../shared/model/filter-options';
import { ExpensesService } from '../../data-access/expenses.service';
import { Subscription } from 'rxjs';
import { Expense } from '../../util/model/expense';
import { DataTableComponent } from '../../../shared/ui/data-table/data-table.component';
import { ExpensesTableFields } from '../../../shared/model/table';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  @Input() filterOptions!: FilterOptions;
  _expenses: Subscription = new Subscription();
  expenses: Expense[] = [];
  fields: ExpensesTableFields = new ExpensesTableFields;

  constructor(
    private service: ExpensesService
  ) {}

  ngOnInit(): void {
    this._expenses = this.service.getExpenses().subscribe((resp: Expense[]) => {
      this.expenses = resp;
      console.log(this.expenses)
    })
  }

  ngOnDestroy(): void {
    this._expenses.unsubscribe();
  }
}
