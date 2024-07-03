import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavBgService {
  private apiUrl = 'http://10.10.10.136/web';

  constructor(private http: HttpClient) {}
  getSearchData(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/list`);
  }
}
