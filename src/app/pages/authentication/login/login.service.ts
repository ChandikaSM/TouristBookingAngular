import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLoggedIn: boolean = false;


  login(){
    this._isLoggedIn = true;
  }

  logout() {
    this._isLoggedIn = false;
  }
  getIsLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
