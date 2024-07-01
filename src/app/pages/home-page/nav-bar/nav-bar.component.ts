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
  constructor(private router: Router, authService: AuthService) {
    const authToken = localStorage.getItem(authConst.authToken)
    console.log(authToken)
    this.headers = authToken
   
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

  myAccount() {
    if (this.headers) {
      console.log('User is logged in');
      // this.router.navigate(['/status']);
    } else {
      console.log('User is not logged in');
      this.openDialogSign();
    }
  }

  profile() {
    if (this.headers) {
      console.log('User is logged in');
      this.router.navigate(['/profile']);
    } else {
      console.log('User is not logged in');
    }
  }
  onChange(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    if (selectedOption === 'myStatus') {
      this.myAccount();
    } else if (selectedOption === 'profile') {
      this.profile();
    }
  }
  isLoggedIn(): boolean {
    return this.headers.isLoggedIn();
  }

logOut():void {
   localStorage.clear();
}
  openDialogSign() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: window.innerWidth < 768 ? '100%' : '1000px',
      maxWidth: '90%',
      height: window.innerWidth < 768 ? '500px' : '',
      maxHeight: '80%',
    });
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
