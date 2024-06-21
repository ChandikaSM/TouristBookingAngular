import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  constructor(private dialog: MatDialog, private fb: FormBuilder, private route: Router) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Form submitted:', this.signUpForm.value);
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });
  }

  onClick(): void {
    this.route.navigate(['/'])
  }
}
