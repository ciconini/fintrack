import { Injectable } from '@angular/core';
import { FilterOptions } from '../../shared/model/filter-options';
import { TaxResponse } from '../util/model/tax';
import { environment } from '../../../environments/environment.local';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  constructor(
    private http: HttpClient
  ) { }

  public filterTaxes(filterOptions: FilterOptions): Observable<TaxResponse> {
    return this.http.post<TaxResponse>(`${environment.api}/expenses/filter`, filterOptions).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
  }
}
