import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = [
    {
      label: 'Dashboard',
      url: '',
    },
    {
      label: 'Expenses',
      url: 'expenses',
      children: [
        {
          label: 'Add Expense',
          url: 'expenses/add'
        }
      ]
    },
    {
      label: 'Incomes',
      url: 'incomes',
      children: [
        {
          label: 'Add Income',
          url: 'income/add'
        }
      ]
    }
  ]

}
