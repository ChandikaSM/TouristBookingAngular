import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataPlacesService {
  private apiUrl = 'http://10.10.10.132';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any[]>(`${this.apiUrl}/web/spots`).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }

  getDataWithId(urlParam: any): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http
      .get<any>(`${this.apiUrl}/web/spots`, {
        params: urlParam,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching data with ID:', error);
          return throwError(error);
        })
      );
  }

  getDistrictDetails(urlParams: any): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http
      .get<any>(`${this.apiUrl}/web/district`, {
        params: urlParams,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching district details:', error);
          return throwError(error);
        })
      );
  }
  searchDistrictsByName(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/web/search`, {
      params: { name: query },
    });
  }
  getDistrictId(urlParam: any): Observable<any> {
    if (navigator.onLine) {
      return throwError('Offline');
    }
    return this.http
      .get<any>(`${this.apiUrl}/web/`, {
        params: urlParam,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching district details:', error);
          return throwError(error);
        })
      );
  }
}
