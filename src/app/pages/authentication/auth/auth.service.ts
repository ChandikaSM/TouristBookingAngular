import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { authConst } from '../authConst';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  headers: any;
  private apiUrl = 'http://10.10.10.132/web';
  redirectUrl: string | null = null;
  private loggedIn = false;

  constructor(private http: HttpClient) {
    const authToken = localStorage.getItem(authConst.authToken)
    console.log(authToken)
    this.headers = authToken
  }

  signUpApi(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   key: 'authKey',
    // });
    return this.http.post(`${this.apiUrl}/sign-up`, data);
  }

  loginApi(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });
    return this.http.post(`${this.apiUrl}/sign-in`, data);
  }

  logOut() {
    localStorage.removeItem(this.headers);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(status: boolean):void {
    this.loggedIn = status;
  }
  // getToken(): string | null {
  //   console.log(this.authTokenKey);
  //   return localStorage.getItem(this.authTokenKey);
  // }
}
