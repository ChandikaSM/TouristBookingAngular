import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Swiper } from 'swiper/types';
import { DataPlacesService } from '../data-places.service';
import { PlacesListComponent } from '../home-page/search/places-list/places-list.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-nav-bg',
  standalone: true,
  imports: [
    FormsModule, CommonModule, PlacesListComponent, HttpClientModule
   
  ],
  templateUrl: './nav-bg.component.html',
  styleUrl: './nav-bg.component.scss',

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavBgComponent implements OnInit{
  district: any[] = [];
  searchQuery: string = '';
  constructor(private dataService: DataPlacesService){}


  ngOnInit(): void {
    this.fetchAllDistrict();
  }
  // searchTerm():void{
  //  console.log("heelo")
  // }
  // onSearch(event: Event) {
  //   event.preventDefault();
  //   console.log('Search query:', this.searchQuery);
  //   if(this.searchQuery === 'west')
  //   this.searchQuery = '';
  // }

  onSearch(event: Event):void {
    event.preventDefault();
    const query = this.searchQuery.trim().toLowerCase();
    if(query === ''){
      this.fetchAllDistrict();
      return;
    } else {
      this.searchDistrictsByName(this.searchQuery);
    }}
    fetchAllDistrict():void {
    this.dataService.getDistrictDetails(this.searchQuery).subscribe(
      (data) => {
        this.district = data;
        console.log("district", this.district);
      },
      (error) => {
        console.log('error', error);
        this.district = [];
      }
    );
    }
    searchDistrictsByName(name:string):void {
      this.dataService.searchDistrictsByName(name).subscribe(
        (data) => {
          this.district = data;
        },
        (error) => {
          console.error('Error searching districts:', error);
          this.district = []; 
        }
      );
    }

  }
