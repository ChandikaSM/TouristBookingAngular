import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavBarComponent } from '../../home-page/nav-bar/nav-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { authConst } from '../authConst';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule, NavBarComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  name: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  password: string = '';
  confirmPassword: string = '';
  redirectUrl: string = '/';
  headers: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    const authToken = localStorage.getItem(authConst.authToken)
    console.log(authToken)
    this.headers = authToken
   
  }

  ngOnInit(): void {}

  onSignUp(): void {
    const userData = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };

    this.authService.signUpApi(userData).subscribe(
      (response) => {
        this.storeUserData(response.userData);

        const users = {
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          address: this.address,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        this.router.navigate(['/']);
        this.closeDialog();
      },
      (error) => {
        console.error('failed', error);
      }
    );
  }
  storeUserData(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  onSignIn(email: string, password: string): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };
    this.authService.loginApi(loginData).subscribe(
      (response) => {
        console.log(response);
        
        localStorage.setItem(authConst.authToken, response.result[0].token);
        console.log(response.result[0].token)
        if(response && response.status) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('loggedUser', JSON.stringify(response.userData))
        }
        this.closeDialog();
        const redirectUrl = this.authService.redirectUrl || '/';
        this.router.navigateByUrl(redirectUrl);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
  showSignIn(): void {
    const container = document.getElementById('container');
    if (container) {
      container.classList.remove('right-panel-active');
    }
  }

  showSignUp(): void {
    const container = document.getElementById('container');
    if (container) {
      container.classList.add('right-panel-active');
    }
  }

  passwordMatch(): boolean {
    return this.password === this.confirmPassword;
  }
  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
