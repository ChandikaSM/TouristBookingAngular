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
  loggedUser: any;
  constructor(private router: Router, private authen: AuthService) {
    this.authen = authen;
    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
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
    if (this.authen.isLoggedIn()) {
      console.log('User is logged in');
      this.router.navigate(['/status']);
    } else {
      console.log('User is not logged in');
    }
  }
  isLoggedIn(): boolean {
    return this.authen.isLoggedIn();
  }
  logOut(): void {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/auth']);
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
