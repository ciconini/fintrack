import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.local';
import { ValueType } from '../model/types';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getTypes(): Observable<ValueType[]> {
    return this.http.get<ValueType[]>(`${environment.api}/types`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }
}
