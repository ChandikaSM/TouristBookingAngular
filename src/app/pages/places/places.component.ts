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
import { BreadCrumpComponent } from '../bread-crump/bread-crump.component';

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
    BreadCrumpComponent
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
  districtList: any[] = [];
  errorMessage: string = '';

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
      this.districtName = params.get('value');
    });
    this.getSpots();
    this.getSpotsDetails();
  }

  getSpots(): void {
    this.dataService.getData().subscribe(
      (datas: any) => {
        this.datas = datas.result;
      },
      (error) => { 
        console.error('Error fetching  data', error);
        this.errorMessage = "failed to load details .please try again";
      }
    );
  }

  getSpotsDetails(): void {
    const urlParam = {
      district: this.districtName,
    };
    this.dataService.getDistrictDetails(urlParam).subscribe(
      (success: any) => {
        this.districtList = success.result;
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
}
