import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard, MatFormFieldModule, RouterLink, CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: '../sign-up/sign-up.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup; // Define loginForm as a FormGroup

 
  constructor(private formBuilder: FormBuilder, public loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if(email === 'sushmaj2347@gmail.com' && password=== "password"){
        this.loginService.login();
        console.log('login successful');
        this.router.navigate(['/status']);
      } else {
        console.log("invalid credentials");
      }
    }
  }
  


  logout() {
    // Handle logout logic
    this.loginService.logout();
  }
  
}
