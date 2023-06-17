import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu;

  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        label: 'Dashboard',
        link: ['/painel']
      },
      {
        label: 'Despesas',
        link: ['/painel/expenses']
      },
      {
        label: 'Proventos',
        link: ['/painel/provisions']
      },
      {
        label: 'Relatórios',
        link: ['/painel/reports']
      },
    ]
  }

}
