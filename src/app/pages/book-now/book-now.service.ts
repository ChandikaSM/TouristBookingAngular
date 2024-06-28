import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookNowService {
  private apiUrl = 'https://api.paymentgateway.com';

  constructor(private http: HttpClient) { }

  processPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/process-payment`, paymentData)
      .pipe(
        catchError(error => {
          console.error('Error processing payment:', error);
          return throwError(error);
        })
      );
  }
}
