import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CalculationDetails } from '../models/calculationDetails';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }
  //getCalculation(calculationDetails: CalculationDetails): Observable<CalculationDetails> {
  getCalculation(amount: number, tax: number): Observable<CalculationDetails> {
    return this.http.get<CalculationDetails>(environment.apiURL+'/calculate?amount='+ amount + '&tax=' + tax)
            .pipe(
              tap( data => console.log('All data: ' + JSON.stringify(data))),
              catchError(this.handleError)
            );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }
}
