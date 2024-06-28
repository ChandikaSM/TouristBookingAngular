import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,NgIf, ReactiveFormsModule, NavBarComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent implements OnInit {
  name: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  password: string = '';
  confirmPassword: string = '';
  redirectUrl: string ='/';
 

  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private dialog : MatDialog, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  onSignUp(): void {
    const userData = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      password: this.password,
      confirmPassword: this.confirmPassword
    };


    this.authService.signUpApi(userData)
      .subscribe(
        (response) => {
          console.log('success', response);
          this.storeUserData(response.userData);
          this.router.navigate(['/status']);
        },
        (error) => {
          console.error('failed', error);
        }
      );
  }
  storeUserData(userData: any):void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  onSignIn(email: string, password: string): void {
    const loginData = {
      email: email,
      password: password
    };
    this.authService.login(loginData)
      .subscribe(
        (response) => {
          console.log('success', response);
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