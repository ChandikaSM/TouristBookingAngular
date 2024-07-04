import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element-bundle';
import { MatButtonModule } from '@angular/material/button';
import { SliderService } from './slider.service';

register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements OnInit {
  constructor(private router: Router, private dataService: SliderService) {}
  images: any[] = [];
  trackById(index: number, item: any): any {
    return item.id;
  }
  ngOnInit(): void {
    this.getSpots();
  }

  getSpots(): void {
    this.dataService.getData().subscribe(
      (images: any) => {
        this.images = images.result;
      },
      (error) => {
        console.error('Error fetching  data', error);
      }
    );
  }
  onClickPlaces(id: string): void {
    this.router.navigate(['/herodetails', id]);
  }
}
