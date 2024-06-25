import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './pages/authentication/login/login.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    MatButtonModule,
    CommonModule,
    MatDialogModule,
    MatMenu,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public loginService: LoginService, private router: Router) {}
  title = 'tourism';
  isMenuOpen = false;

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
    if (this.loginService.getIsLoggedIn()) {
      this.router.navigate(['/status']);
    } else {
      console.log('not login');
      this.router.navigate(['/login']);
    }
  }
}
