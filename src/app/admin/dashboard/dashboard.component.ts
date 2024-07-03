import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SliderComponent } from '../../pages/slider/slider.component';
export interface List {
  name: string;
  number: number;
  category: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatCardModule,
    MatCardModule,
    MatChipSet,
    MatChip,
    CommonModule,
    SliderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  selected = model<Date | null>(null);
  list: List[] = [
    {
      name: 'caed',
      number: 4356,
      category: 'order',
    },
    {
      name: 'caed',
      number: 4356,
      category: 'order',
    },
    {
      name: 'caed',
      number: 4356,
      category: 'order',
    },
  ];
}
