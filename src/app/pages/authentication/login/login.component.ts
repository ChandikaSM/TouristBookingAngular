import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard, MatFormFieldModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: '../sign-up/sign-up.component.scss'
})
export class LoginComponent {
  constructor(private dialog: MatDialog) {}
  openLoginModal(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px'
    });
  }

}
