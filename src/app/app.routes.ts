import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { DashboardRoutes } from './dashboard/shell/dashboard.routes';
import { ExpensesRoutes } from './expenses/shell/expenses.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: DashboardRoutes
  },
  {
    path: 'expenses',
    component: LayoutComponent,
    children: ExpensesRoutes
  }
];
