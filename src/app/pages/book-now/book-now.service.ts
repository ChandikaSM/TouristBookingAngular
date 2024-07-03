import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { authConst } from '../authentication/authConst';

@Injectable({
  providedIn: 'root',
})
export class BookNowService {
  headers: any;
  private apiUrl = 'http://10.10.10.136/web';

  constructor(private http: HttpClient) {
  }

  processBooking(booking: any, headers: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/booking/user'`, booking, {
      headers: new HttpHeaders(this.headers)
    })
  }
}
