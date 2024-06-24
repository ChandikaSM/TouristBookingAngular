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

interface districtStatic {
  img: string;
  name: string;
  value: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterLink,
    FormsModule,
    CommonModule,
    MatChipSet,
    MatChip,
    PlacesListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  datas: any[] = [];
  districtList: any;
  searchTerm: string = '';

  districtShow: districtStatic[] = [
    {
      img: 'https://www.myindiamyglory.com/wp-content/uploads/2017/09/Chobimura-Sculpture-Cover.jpg',
      name: 'SOUTH',
      value: 'South',
    },
    {
      img: 'https://www.tripuraindia.in/assets/upload_images/news_images/udaipur-matabari-700-tripura-india2.jpg',
      name: 'GOMATI',
      value: 'Goumati',
    },
    {
      img: 'https://i.ytimg.com/vi/958m6F5s5a8/maxresdefault.jpg',
      name: 'SEPAHIJALA',
      value: 'Sepahijala',
    },
    {
      img: 'https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Agartala_tv_destination_img_7_l_750_1000.jpg',
      name: 'West Tripura',
      value: 'West Tripura',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Unakoti_3.jpg/800px-Unakoti_3.jpg',
      name: 'UNAKOTI',
      value: 'Unakoti',
    },
    {
      img: 'https://pincodepostal.in/wp-content/uploads/2023/09/Dhalai.webp',
      name: 'DHALAI',
      value: 'Dhalai',
    },
  ];

  items: any[] = [
    {
      id: 1,
      name: 'ITEM1',
      location: 'agartala',
    },
    {
      id: 2,
      name: 'Item2',
      location: 'sabroom',
    },
  ];
  filteredItems: any[] = [];

  constructor(private dataService: DataPlacesService, public router: Router) {}

  search(): void {
    if (this.searchTerm.trim() !== '') {
      console.log(this.searchTerm, 'displaying search item is filtered or not');
      this.filteredItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
    }
  }

  ngOnInit(): void {
    this.filteredItems = this.items;
    console.log('59', this.filteredItems);
    this.getSpots();
  }

  getSpots(): void {
    this.dataService.getData().subscribe(
      (datas: any) => {
        this.datas = datas.result.slice(0, 6);
      },
      (error) => {
        console.error('Error fetching  data', error);
      }
    );
  }

  onClickPlaces(id: string): void {
    this.router.navigate(['/herodetails', id]);
  }

  onClickDistrict(value: string): void {
    console.log(value);
    this.router.navigate(['/places', location]);
  }
}
