import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordService } from './forget-password.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../../home-page/nav-bar/nav-bar.component';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  showForgotPassword = true;
  showOTPForm = false;
  showChangePasswordForm = false;

  email: string | null = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';


  constructor(
    private dialog: MatDialog,
    private forgetPassword: ForgetPasswordService,
    private router: Router
  ) {}

  // sendResetLink(): void {
  //   if (this.email) {
  //     const request = {
  //       email: this.email,
  //     };
  //     this.forgetPassword.forgetPasswordApi(request).subscribe(() => {
  //       if(request){
  //         localStorage.setItem('email', this.email);
  //       }
  //       this.showForgotPassword = false;
  //       this.showOTPForm = true;
  //     });
  //   }
  // }

  sendResetLink(): void{
    const request = {
      email: this.email
    };
    this.forgetPassword.forgetPasswordApi(request).subscribe((success)=>{
      if(success.status){
        localStorage.setItem('email', this.email || '');
      }
      this.showForgotPassword = false;
      this.showOTPForm = true;
    })
  }

  verifyOTP(): void {
    const request = {
      email: this.email,
      otp: this.otp ,
    };

    this.forgetPassword.verifyOTPApi(request).subscribe((success) => {
      if (success.status) {
        localStorage.setItem('otp', this.otp)
        this.showOTPForm = false;
        this.showChangePasswordForm = true;
      } else {
        alert('wrong otp entered');
      }
    });
  }

  changePassword(): void {
    if (this.newPassword === this.confirmPassword) {
      const request = {
        email: (this.email = localStorage.getItem('email')),
        otp: (this.email = localStorage.getItem('otp')),
        newPassword: this.newPassword,
        confirmPassword:  this.confirmPassword
    
      };
      this.forgetPassword.changePasswordApi(request).subscribe(() => {
        this.showChangePasswordForm = false;
        this.showForgotPassword = true;
      });
    } else {
      alert('password do not matched');
    }
  }

  dialogBox(): void {
    this.router.navigate(['/']);
    this.openDialogSign();
  }
  openDialogSign():void {
     this.dialog.open(AuthComponent, {
      width: window.innerWidth < 768 ? '100%' : '1000px',
      maxWidth: '90%',
      height: window.innerWidth < 768 ? '500px' : '',
      maxHeight: '80%',
      data: {newPassword: this.newPassword}
    });
  }
}
