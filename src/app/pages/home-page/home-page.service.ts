import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  headers: any;
  private apiUrl = 'http://10.10.10.136';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any[]>(`${this.apiUrl}/web/spots`);
  }

  getDataWithId(urlParam: any): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any>(`${this.apiUrl}/web/spots`, {
      params: urlParam,
      headers: this.headers,
    });
  }

  getDistrictDetails(urlParams: any): Observable<any> {
    console.log('headers', this.headers);
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any>(`${this.apiUrl}/web/district`, {
      params: urlParams,
      headers: this.headers,
    });
  }
  searchDistrictsByName(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/web/search`, {
      params: { name: query },
      headers: this.headers,
    });
  }
  getDistrictId(urlParam: any): Observable<any> {
    if (navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any>(`${this.apiUrl}/web/`, {
      params: urlParam,
      headers: this.headers,
    });
  }
}
