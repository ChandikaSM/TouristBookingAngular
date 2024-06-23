import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomePageService } from './home-page.service';
import { Interface } from './interface';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../data-places.service';
import { FormsModule } from '@angular/forms';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { PlacesListComponent } from './search/places-list/places-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink, FormsModule, CommonModule, MatChipSet, MatChip, PlacesListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit{
    datas: any[] = [];
    searchTerm: string='';
    items: any[] = [
      {
        id: 1, name: 'ITEM1', location: 'agartala'
      },
      {
        id: 2, name: 'Item2',location: 'sabroom'
      }
    ];
    filteredItems: any[] = [];
  
    constructor(private dataService: DataPlacesService, public router: Router) {
    
    }

  
  
    search():void {
      if(this.searchTerm.trim() !== ''){
        this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }   else {
        this.filteredItems = this.items;
      }
  
    }
  
    // trackBy(index: number, data: any): number {
    //   return data.id;
    // }


  ngOnInit(): void {
    // this.dataService.getDatas().subscribe((datas) => {
    //   this.datas = datas;
    //   console.log('All datas from api line no 49, place.components.ts', datas);
    // });
    this.filteredItems = this.items;
    console.log("59", this.filteredItems);
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
