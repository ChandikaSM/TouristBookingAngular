import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordService } from './forget-password.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../../home-page/nav-bar/nav-bar.component';

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
  sendResetLink(): void {
    if (this.email) {
      const request = {
        email: this.email,
      };
      console.log("request", request);
      this.forgetPassword.forgetPasswordApi(request).subscribe(() => {
        this.showForgotPassword = false;
        this.showOTPForm = true;
      });
    }
  }

  verifyOTP(): void {
    const request = {
     email:  this.email,
      otp: this.otp,
    };

    this.forgetPassword.verifyOTPApi(request).subscribe((success) => {
      if (success) {
        localStorage.setItem('otp', this.otp);
        console.log("otp verified");
      this.showOTPForm = false;
      this.showChangePasswordForm = true;

      } else {
        alert('wrong otp entered');
      }

     
    });
  }

  changePassword(): void {
if(this.newPassword === this.confirmPassword){
    const request = {
      email: this.email,
      newPassword: this.newPassword
    };
    this.forgetPassword.changePasswordApi(request).subscribe(() => {
      this.email = '';
      this.otp = '';
      this.newPassword = '';
      this.confirmPassword = '';
      this.showChangePasswordForm = false;
      this.showForgotPassword = true;
    });
  } else {
    alert('password do not matched')
  }}
}
