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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../data-places.service';
import { CommonModule } from '@angular/common';
import { MatSpinner } from '@angular/material/progress-spinner';

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
    MatSpinner,
  ],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
  providers: [DataPlacesService],
})
export class PlacesComponent implements OnInit {
  datas: any[] = [];
  loading: boolean = false;
  selectedDistrict: string = '';
  districtName: any;

  trackBy(index: number, data: any): number {
    return data.id;
  }

  constructor(
    private dataService: DataPlacesService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.districtName = params.get('location');
      console.log(this.districtName);
    });
    this.getSpots();
    this.getSpotsDetails();
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

  getSpotsDetails(): void {
    const urlParam = {
      district: this.districtName,
    };
    this.dataService.getDistrictDetails(urlParam).subscribe(
      (success: any) => {
        console.log('success', success);
      },
      (error) => {
        console.error('Error fetching  data', error);
      }
    );
  }

  onClickPlaces(id: string): void {
    this.loading = true;
    this.router.navigate(['/herodetails', id]);
  }

  getPlacesByDistrict(district: string): void {
    this.loading = true;
    this.dataService.getPlacesByDistrict(district).subscribe(
      (datas: any) => {
        this.datas = datas.result;
        this.loading = false;
      },
      (error) => {
        console.error(`Error fetching ${district} district data`, error);
        this.loading = false;
      }
    );
  }

  onDistrictChange(district: string): void {
    this.selectedDistrict = district;
    if (district === 'Dhalai') {
      this.getSpots();
    } else {
      this.getPlacesByDistrict(district);
    }
  }
}
