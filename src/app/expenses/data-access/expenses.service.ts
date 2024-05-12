import { Injectable } from '@angular/core';
import { Expense, ExpenseType } from '../util/model/expense';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  public getExpenses(): Observable<Expense[]> {
    const expensesMock: Expense[] = [
      {
        id: '1',
        name: 'Lidl',
        type: ExpenseType.GROCERY,
        value: 11.2,
        date: new Date()
      },
      {
        id: '2',
        name: 'Pingo Doce',
        type: ExpenseType.GROCERY,
        value: 24.99,
        date: new Date()
      },
      {
        id: '3',
        name: 'McDonalds',
        type: ExpenseType.MEAL,
        value: 9.99,
        date: new Date()
      },
    ]
    return of(expensesMock)
  }
}
