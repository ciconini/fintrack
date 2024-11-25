import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.local";
import { catchError, map, Observable, throwError } from "rxjs";
import { ReportResponse } from "../../shared/model/response";

@Injectable({
  providedIn: 'root'
})
export class DashboardReportService {

  constructor(
    private http: HttpClient
  ) {}

  public getExpensesReport(): Observable<ReportResponse> {
    return this.http.get<ReportResponse>(`${environment.api}/reports/expenses`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
  }
}