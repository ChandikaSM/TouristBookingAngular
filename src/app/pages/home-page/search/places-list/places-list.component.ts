import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-places-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatChipsModule,
    MatCardFooter,
    MatCardModule,
  ],
  templateUrl: './places-list.component.html',
  styleUrl: './places-list.component.scss',
})
export class PlacesListComponent {
  @Input() district: any;
}
