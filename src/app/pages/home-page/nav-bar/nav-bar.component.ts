import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenu } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { AuthComponent } from '../../authentication/auth/auth.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../authentication/auth/auth.service';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { authConst } from '../../authentication/authConst';
import { NavBarService } from './nav-bar.service';
import { ForgetPasswordComponent } from '../../authentication/auth/forget-password/forget-password.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    RouterLink,
    MatMenu,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelect,
    MatOptionModule,
    AuthComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  readonly dialog = inject(MatDialog);
  searchTerm: string = '';
  title = 'tourism';
  isMenuOpen = false;
  headers: any;
  name: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  password: string = '';
  confirmPassword: string = '';
  redirectUrl: string = '/';
  authTokenKey = authConst.authToken;

  constructor(private router: Router, private navService: NavBarService) {
    const authToken = localStorage.getItem(authConst.authToken);
    this.headers = authToken;
  }

  login() {
    this.openDialogSign();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('document:click', ['$event'])
  clickOutsideMenu(event: MouseEvent) {
    if (!this.isMenuOpen) {
      return;
    }

    const target = event.target as HTMLElement;
    if (!target.closest('.menuList') && !target.closest('.menubar')) {
      this.isMenuOpen = false;
    }
  }

  profile() {
    if (this.headers) {
      this.router.navigate(['/profile']);
    } else {
    }
  }
  onChange(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    if (selectedOption === 'login') {
      this.openDialogSign();
    } else if (selectedOption === 'profile') {
      this.profile();
    } else if (selectedOption === 'logOut') {
      // this.logOut();
    }
  }

  forget(): void {
    this.router.navigate(['/forget']);
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  openDialogSign() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: window.innerWidth < 768 ? '700px' : '1000px',
      maxWidth: '90%',
      height: window.innerWidth < 768 ? '600px' : '',
      maxHeight: '100%',
    });

  }

  openDialogForget() {
    this.dialog.open(ForgetPasswordComponent, {
      width: window.innerWidth < 768 ? '100%' : '800px',
      maxWidth: '90%',
      height: window.innerWidth < 768 ? '500px' : '',
      maxHeight: '80%',
    });
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  onSignOut() {
    this.navService.logOutApi();
    localStorage.removeItem(authConst.authToken);
    window.location.reload();
  }
}
