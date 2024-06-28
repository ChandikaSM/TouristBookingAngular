import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NavBarComponent } from '../home-page/nav-bar/nav-bar.component';

export interface PeriodicElement {
  name: string;
  orderId: number;
  ticket: string;
  place: string;
  price: number;
  date: Date;
  checkIn: string;
  checkOut: string;
  status: string;
  downloadUrl: string;
}
export interface placeList {
  id: number;
  name: string;
  link: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    orderId: 1,
    name: 'Sushmita Majumder',
    place: 'udaipur Matabari',
    ticket: '#7894',
    price: 78,
    date: new Date('2023-07-12'),
    downloadUrl: 'assets/testing.pdf',
    checkIn: 'yes',
    checkOut: 'yes',
    status: 'pending',
  },
  {
    orderId: 2,
    name: 'Sushmita Majumder',
    place: 'Jagannath Mandir',
    ticket: '#7899',
    price: 89,
    date: new Date('2024-07-12'),
    downloadUrl: 'assets/testing.pdf',
    checkIn: 'yes',
    checkOut: 'yes',
    status: 'pending',
  },
  {
    orderId: 3,
    name: 'Sushmita Majumder',
    place: 'Chobimura',
    ticket: '#75678',
    price: 90,
    date: new Date('2025-07-12'),
    downloadUrl: 'assets/testing.pdf',
    checkIn: 'yes',
    checkOut: 'yes',
    status: 'pending',
  },
];
@Component({
  selector: 'app-status-user',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIcon,
    MatChipSet,
    MatChip,
    CommonModule,
    RouterLink,
    MatAutocompleteModule,
    FormsModule,
    NavBarComponent,
  ],
  templateUrl: './status-user.component.html',
  styleUrl: './status-user.component.scss',
})
export class StatusUserComponent {
  constructor(private router: Router) {}
  displayedColumns: string[] = [
    'Order Id',
    'name',
    'place',
    'ticket',
    'price',
    'date',
    'checkIn',
    'checkOut',
    'status',
    'download',
  ];

  displayPlaces: placeList[] = [
    { id: 1, name: 'West Tripura', link: 'WEST', value: 'West Tripura' },
    {
      id: 2,
      name: 'South Tripura',
      link: 'SOUTH',
      value: 'South Tripura',
    },
    {
      id: 3,
      name: 'North Tripura',
      link: 'North',
      value: 'North Tripura',
    },
    {
      id: 4,
      name: 'Dhalai',
      link: 'DHALAI',
      value: 'Dhalai',
    },
    {
      id: 5,
      name: 'Sipahijala',
      link: 'SIPAHIJALA',
      value: 'Sipahijala',
    },
    {
      id: 6,
      name: 'Unakoti',
      link: 'UNAKOTI',
      value: 'Unakoti',
    },
    {
      id: 7,
      name: 'Khowai',
      link: 'Khowai',
      value: 'Khowai',
    },
    {
      id: 8,
      name: 'Gomati',
      link: 'Gomati',
      value: 'Gomati',
    },
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filterValue = {
    name: '',
    place: '',
    date: '',
    price: '',
  };
  completedItems: PeriodicElement[] = [];
  upComing: PeriodicElement[] = [];
  myControl = new FormControl('');

  ngOnInit(): void {
    this.showCompleted();
    this.showUpcoming();
    this.autoComplete();
  }

  downloadItem(element: PeriodicElement) {
    console.log('Download clicked for:', element);
    const url = element.downloadUrl;
    window.open(url, '_blank');
  }
  showCompleted(): void {
    console.log(this.dataSource);
    const today = new Date();
    this.completedItems = ELEMENT_DATA.filter((item) => item.date < today);
  }
  showUpcoming(): void {
    const today = new Date();
    this.upComing = ELEMENT_DATA.filter((item) => item.date > today);
  }

  toggleItems(showCompleted: boolean, showUpcoming: boolean): void {
    if (showCompleted) {
      this.dataSource.data = this.completedItems;
    } else if (showUpcoming) {
      this.dataSource.data = this.upComing;
    } else {
      this.dataSource.data = ELEMENT_DATA;
    }
  }
  searchQuery: string = '';

  applyFilter(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const filterValue = this.searchQuery.trim().toLowerCase();

    if (filterValue) {
      this.dataSource.data = ELEMENT_DATA.filter(
        (item) =>
          item.name.toLowerCase().includes(filterValue) ||
          item.place.toLowerCase().includes(filterValue) ||
          item.date.toDateString().toLowerCase().includes(filterValue) ||
          item.price.toString().toLowerCase().includes(filterValue)
      );
    } else {
      this.dataSource.data = ELEMENT_DATA;
    }
  }

  autoComplete(): void {
    this.myControl = new FormControl('');
  }
  onClickDistrict(value: string): void {
    this.router.navigate(['/places', value]);
  }
}
