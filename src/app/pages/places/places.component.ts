import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../data-places.service';
import { CommonModule } from '@angular/common';

export interface cardItem {
  title: string;
  location: string;
  description: string;
  img: string;
}
@Component({
  selector: 'app-places',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
  providers: [DataPlacesService],
})
export class PlacesComponent implements OnInit {
  datas: any[] = [];
  trackBy(index: number, data: any): number {
    return data.id;
  }

  constructor(private dataService: DataPlacesService, public router: Router) {}

  ngOnInit(): void {
    // this.dataService.getDatas().subscribe((datas) => {
    //   this.datas = datas;
    //   console.log('All datas from api line no 49, place.components.ts', datas);
    // });
    this.getSpots();
  }

  getSpots(): void {
    this.dataService.getData().subscribe(
      (datas: any) => {
        console.log(datas);
        this.datas = datas.result;
        console.log(
          'All datas from api line no 68, place.components.ts',
          datas
        );
      },
      (error) => {
        console.error('Error fetching  data', error);
      }
    );
  }

  onClickPlaces(id: string): void {
    console.log(id)
    this.router.navigate(['/herodetails', id]);
  }
}
