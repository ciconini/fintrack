import { Routes } from "@angular/router";
import { ExpenseDashboardComponent } from "../feature/expense-dashboard/expense-dashboard.component";

export const ExpensesRoutes: Routes = [
  {
    path: '',
    component: ExpenseDashboardComponent
  }
];