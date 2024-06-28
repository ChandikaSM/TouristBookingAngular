import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://10.10.10.132/web';
  private authTokenKey = 'token';
  redirectUrl: string | null = null;

  signUpApi(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.getToken(),
      key: 'authKey',
    });
    return this.http.post(`${this.apiUrl}/users`, { headers }, data);
  }

  loginApi(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/login`, data, { headers }).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  logOut() {
    localStorage.removeItem(this.authTokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }
  getToken(): string | null {
    console.log(this.authTokenKey);
    return localStorage.getItem(this.authTokenKey);
  }
}
