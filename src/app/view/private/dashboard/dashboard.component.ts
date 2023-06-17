import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: true;
  cards: any[];

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title: 'teste 123',
        data: [
          1,2,3,4,5
        ]
      },
      {
        title: 'teste 456',
        data: [
          1,2,3,4,5
        ]
      },
      {
        title: 'teste 789',
        data: [
          1,2,3,4,5
        ]
      },
    ]
  }

}
