import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard.component";
import { ExpenseListComponent } from "../../expenses/feature/expense-list/expense-list.component";

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];