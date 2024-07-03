import { Component, ElementRef, OnInit } from '@angular/core';
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
import { NavBarComponent } from '../home-page/nav-bar/nav-bar.component';
import { PlaceService } from './places.service';

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
    NavBarComponent,
  ],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
  providers: [PlaceService],
})
export class PlacesComponent implements OnInit {
  datas: any[] = [];
  loading: boolean = false;
  selectedDistrict: string = '';
  districtName: any;
  districtList: any[] = [];
  errorMessage: string = '';

  constructor(
    private dataService: PlaceService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.districtName = params.get('value');
    });
    this.getSpots();
    this.getSpotsDetails();
  }

  getSpots(): void {
    this.dataService.getData().subscribe((datas: any) => {
      this.datas = datas.result;
    });
  }

  getSpotsDetails(): void {
    const urlParam = {
      district: this.districtName,
    };
    this.dataService.getDistrictDetails(urlParam).subscribe((success: any) => {
      this.districtList = success.result;
    });
  }

  onClickPlaces(id: string): void {
    this.loading = true;
    this.router.navigate(['/herodetails', id]);
  }
}
