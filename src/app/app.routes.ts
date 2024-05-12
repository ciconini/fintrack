import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { DashboardRoutes } from './dashboard/shell/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: DashboardRoutes
  }
];
