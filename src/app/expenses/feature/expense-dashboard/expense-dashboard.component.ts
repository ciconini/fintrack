import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { ExpenseListComponent } from '../expense-list/expense-list.component';
import { FilterOptions } from '../../../shared/model/filter-options';
import {
  MatDialog
} from '@angular/material/dialog';
import { ExpenseAddComponent } from '../expense-add/expense-add.component';

@Component({
  selector: 'app-expense-dashboard',
  standalone: true,
  imports: [
    ButtonComponent, 
    ExpenseListComponent,
  ],
  templateUrl: './expense-dashboard.component.html',
  styleUrl: './expense-dashboard.component.scss'
})
export class ExpenseDashboardComponent {
  filterOptions: FilterOptions = new FilterOptions();

  constructor(
    public dialog: MatDialog
  ){}

  public addNewExpense() {
    this.dialog.open(ExpenseAddComponent, {
      width: '400px'
    })
  }
}
