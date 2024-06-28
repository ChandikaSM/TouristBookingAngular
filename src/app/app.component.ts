
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenu } from '@angular/material/menu';

import { FormsModule } from '@angular/forms';
import { AuthComponent } from './pages/authentication/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatMenu,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  isOffline = false;

  ngOnInit(): void {
    this.isOffline = !navigator.onLine;

    window.addEventListener('online', () => this.handleConnectionChange(true));
    window.addEventListener('offline', () => this.handleConnectionChange(false));
  } private handleConnectionChange(online: boolean): void {
    this.isOffline = !online;
  }

}