import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menu = [
    {
      label: 'Dashboard',
      url: '/dashboard',
      icon: 'fa-solid fa-home'
    },
    {
      label: 'Expenses',
      url: '/expenses',
      icon: 'fa-solid fa-receipt'
    },
    {
      label: 'Incomes',
      url: '/incomes',
      icon:  'fa-solid fa-sack-dollar'
    }
  ]
}
