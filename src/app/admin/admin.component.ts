import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterModule } from '@angular/router';

export interface items {
  icons: string;
  name: string;
  routing: string;
}
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  showFiller = false;

  item: any[] = [
    {
      icons: 'dashboard',
      name: 'Dashboard',
      routing: '/admin/dashboard',
    },
    {
      icons: 'account_circle',
      name: 'User',
      routing: '/admin/user',
    },
    {
      icons: 'bar_chart',
      name: 'Order',
      routing: '/admin/order',
    },
    {
      icons: 'manage_history',
      name: 'Manage',
      routing: '/admin/manage',
    },
    {
      icons: 'settings',
      name: 'Setting',
      routing: '/admin/setting',
    },
    {
      icons: 'logout',
      name: 'Signout',
      routing: 'signout',
    },
  ];
  selectedItem: items | null = null;

  updateSubItems(item: items) {
    this.selectedItem = item;
  }
}
