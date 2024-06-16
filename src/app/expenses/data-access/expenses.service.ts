import { Injectable } from '@angular/core';
import { Expense, ExpenseType } from '../util/model/expense';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(
    private http: HttpClient
  ) { }

  public getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${environment.url}/expenses`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
  }

  public getExpense(id: string): Observable<Expense> {
    return this.http.get<Expense>(`${environment.url}/expenses/${id}`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  public saveExpense(payload: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${environment.url}/expenses`, payload).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  public updateExpense(id: string, payload: any): Observable<Expense> {
    return this.http.patch<Expense>(`${environment.url}/expense/${id}`, payload).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  public deleteExpense(id: string): Observable<Expense> {
    return this.http.delete<Expense>(`${environment.url}/expense/${id}`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }
}
