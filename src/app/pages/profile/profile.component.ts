import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from '../home-page/nav-bar/nav-bar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, NavBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
