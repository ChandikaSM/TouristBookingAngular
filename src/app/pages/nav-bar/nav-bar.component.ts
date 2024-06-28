import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatMenu } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { AuthComponent } from '../authentication/auth/auth.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../authentication/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    RouterLink,
    MatMenu,
  MatToolbarModule,
 ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  readonly dialog = inject(MatDialog);
  searchTerm: string = '';
  title = 'tourism';
  isMenuOpen = false;
  constructor(private router: Router, private authen: AuthService){
    this.authen = authen;
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
  logOut():void {
     this.authen.logOut();
     this.router.navigate(['/']);
  }

  openDialogSign() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: window.innerWidth < 768 ? '100%' : '1000px',
      maxWidth: '90%',
      height: window.innerWidth < 768 ? '500px' : '', 
      maxHeight: '80%', 

  });

}
closeMenu():void {
  this.isMenuOpen = false;
}
}