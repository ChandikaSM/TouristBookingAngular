import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookNowService {
  headers: any;
  private apiUrl = 'http://10.10.10.132/web';

  constructor(private http: HttpClient) {}

  processBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/booking/user'`, {
      headers: this.headers
    })
  }
}
