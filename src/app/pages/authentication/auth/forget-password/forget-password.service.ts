import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = "http://10.10.10.136";
  
  constructor(private http: HttpClient) { }

  forgetPasswordApi(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/web/otp-send`, request)
  }
  verifyOTPApi(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/web/verify`, request)
   
  }

  changePasswordApi(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/web/reset`, request)
  }



}
