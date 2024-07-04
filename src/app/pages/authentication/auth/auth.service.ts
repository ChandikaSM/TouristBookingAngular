import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { authConst } from '../authConst';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // headers: any;
  private apiUrl = 'http://10.10.10.136/web';
  redirectUrl: string | null = null;

  constructor(private http: HttpClient) {
  }

  signUpApi(data: any): Observable<any> {
     const authToken =localStorage.getItem(authConst.authToken);
     const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
     })
    return this.http.post(`${this.apiUrl}/sign-up`, data, { headers });
  }

  loginApi(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/sign-in`,data, {headers});
  }




}