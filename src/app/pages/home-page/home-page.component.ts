import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatChip, MatChipSet } from '@angular/material/chips';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavBgComponent } from './nav-bg/nav-bg.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from '../slider/slider.component';
import { HomePageService } from './home-page.service';
interface districtStatic {
  img: string;
  name: string;
  value: string;
}

interface options {
  name: string;
}
declare var $: any;
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterLink,
    CommonModule,
    MatChipSet,
    MatChip,
    SliderComponent,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    NavBgComponent,
    NavBarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  datas: any[] = [];
  districtList: any;
  currentPage: number = 1;
  itemsPerPage: number = 4;
  childQuantity = 1;
  adultQuantity = 1;

  districtShow: districtStatic[] = [
    {
      img: 'https://www.myindiamyglory.com/wp-content/uploads/2017/09/Chobimura-Sculpture-Cover.jpg',
      name: 'SOUTH',
      value: 'South Tripura',
    },
    {
      img: 'https://www.tripuraindia.in/assets/upload_images/news_images/udaipur-matabari-700-tripura-india2.jpg',
      name: 'GOMATI',
      value: 'Gomati',
    },
    {
      img: 'https://i.ytimg.com/vi/958m6F5s5a8/maxresdefault.jpg',
      name: 'SEPAHIJALA',
      value: 'Sepahijala',
    },
    {
      img: 'https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Agartala_tv_destination_img_7_l_750_1000.jpg',
      name: 'WEST TRIPURA',
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
    {
      img: 'https://media.assettype.com/outlooktraveller%2F2023-09%2Ff0097a3e-63bc-4bd3-ae30-7ffd77c54b31%2F33611704_917566975118088_7750874209164722176_n.jpg?w=1200&auto=format%2Ccompress&fit=max',
      name: 'NORTH',
      value: 'North Tripura',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPVFjBXEHrikTrSe0wUIfB0Qxbi7LhmJ4ow&usqp=CAU',
      name: 'KHOWAI',
      value: 'Khowai',
    },
  ];
  displayOption: options[] = [
    {
      name: 'West Tripura',
    },
    {
      name: 'South Tripura',
    },
    {
      name: 'North Tripura',
    },
    {
      name: 'Unakoti',
    },
    {
      name: 'Sepahijala',
    },
    {
      name: 'Gomati',
    },
    {
      name: 'Khowai',
    },
  ];

  trackById(index: number, item: any): any {
    return item.id;
  }
  filteredItems: any[] = [];

  constructor(private dataService: HomePageService, public router: Router) {}

  ngOnInit(): void {
    this.getSpots();
  }

  getSpots(): void {
    this.dataService.getData().subscribe(
      (datas: any) => {
        this.datas = datas.result;
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
    this.router.navigate(['/places', value]);
  }
  updateItemsPerPage(value: number): void {
    this.itemsPerPage = value;
  }
  onPageChanged(event: any): void {
    this.currentPage = event.pageIndex + 1;
  }
  getDisplayedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.datas.slice(startIndex, startIndex + this.itemsPerPage);
  }

  decreaseChildQuantity() {
    if (this.childQuantity > 0) {
      this.childQuantity--;
    }
  }
  decreaseAdultQuantity() {
    if (this.adultQuantity > 0) {
      this.adultQuantity--;
    }
  }

  increaseChildQuantity() {
    if (this.childQuantity < 10) {
      this.childQuantity++;
    } else {
      alert('Maximum Limit Reached');
    }
  }

  increaseAdultQuantity() {
    if (this.adultQuantity < 10) {
      this.adultQuantity++;
    } else {
      alert('max');
    }
  }
}
