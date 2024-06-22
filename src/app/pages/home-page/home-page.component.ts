import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomePageService } from './home-page.service';
import { Interface } from './interface';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../data-places.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit{
    datas: any[] = [];
    // trackBy(index: number, data: any): number {
    //   return data.id;
    // }
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
        this.datas = datas.result.slice(0, 6);
        console.log(
          'All datas from api line no 68, place.components.ts',
          this.datas
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
