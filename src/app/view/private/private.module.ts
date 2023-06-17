import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateRoutingModule } from './private-routing.module';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';



@NgModule({
  declarations: [DashboardComponent, TemplateComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
