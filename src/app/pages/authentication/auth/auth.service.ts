import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    private apiUrl = 'http://10.10.10.132/web';
    private authTokenKey = 'authToken';
    redirectUrl: string | null = null;

    signUpApi(data: any):Observable<any> {
      return this.http.post(`${this.apiUrl}/users`, data);
    }

    login(data: any) {
      return this.http.post(`${this.apiUrl}/loginU`, data).pipe(
        tap((result: any) => {
          if(result && result.token) {
            localStorage.setItem(this.authTokenKey, result.token);

          }
        }),
        catchError(error => {
          throw error;
        })
      )
    }

    logOut(){
      localStorage.removeItem(this.authTokenKey);
    }

  
    isLoggedIn():boolean {
      return !!localStorage.getItem(this.authTokenKey);
    }
    getToken(): string | null {
      return localStorage.getItem(this.authTokenKey);
    }

}
