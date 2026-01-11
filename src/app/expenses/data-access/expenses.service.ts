import { Injectable } from '@angular/core';
import { Expense, ExpenseResponse } from '../util/model/expense';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.local';
import { FilterOptions } from '../../shared/model/filter-options';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(
    private http: HttpClient
  ) { }

  public getExpenses(): Observable<ExpenseResponse> {
    return this.http.get<ExpenseResponse>(`${environment.api}/expenses`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
  }

  public filterExpenses(filterOptions: FilterOptions): Observable<ExpenseResponse> {
    return this.http.post<ExpenseResponse>(`${environment.api}/expenses/filter`, filterOptions).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
  }

  public getExpense(id: string): Observable<Expense> {
    return this.http.get<Expense>(`${environment.api}/expenses/${id}`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  public saveExpense(payload: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${environment.api}/expenses`, payload).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  public updateExpense(id: string, payload: any): Observable<Expense> {
    return this.http.patch<Expense>(`${environment.api}/expenses/${id}`, payload).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  public deleteExpense(id: string): Observable<Expense> {
    return this.http.delete<Expense>(`${environment.api}/expenses/${id}`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  getExpenseValue(filterOptions: FilterOptions): Observable<number> {
    return this.http.post<number>(`${environment.api}/expenses/value`, filterOptions).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }
}
