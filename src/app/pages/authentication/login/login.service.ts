import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, switchMap } from 'rxjs';
import { DialogConfirmLogoutComponent } from '../dialog-confirm-logout/dialog-confirm-logout.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLoggedIn: boolean = false;
   constructor(private dialog: MatDialog) {}
  login(){
    this._isLoggedIn = true;
  }

  logout(): Observable<boolean> {
    return this.openConfirmation().pipe(
      switchMap(result => {
        if(result){
          this._isLoggedIn = false;
        }
        return [result];
      })
    );
  }



  getIsLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  private openConfirmation(): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogConfirmLogoutComponent, {
      // width: '400px',
      // heigh
      
    });

    return dialogRef.afterClosed().pipe(
      map(result => !!result)
    );
  }
}
