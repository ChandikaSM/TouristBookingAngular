import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../../data-places.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { AuthComponent } from '../../authentication/auth/auth.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { authConst } from '../../authentication/authConst';
interface dates {
  month: string;
  date: Number;
  day: string;
  selected: boolean;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    HttpClientModule,
    NavBarComponent,
    CommonModule,
    MatIcon,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit {
  datas: any;
  heroId: any;
  date: any;
  headers: any;
  name: any;
  daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  dates: dates[] = [
    {
      month: 'june',
      date: 15,
      day: 'tues',
      selected: false,
    },
    {
      month: 'june',
      date: 15,
      day: 'tues',
      selected: false,
    },
    {
      month: 'june',
      date: 15,
      day: 'tues',
      selected: false,
    },
    {
      month: 'june',
      date: 15,
      day: 'tues',
      selected: false,
    },
  ];
   
  constructor(
    private dataService: DataPlacesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const authToken = localStorage.getItem(authConst.authToken);
    this.headers = authToken;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.heroId = params.get('id');
    });
    this.getPlaceIdWise();
  }
  scroll(direction: number): void {
    const container = document.querySelector('.slider') as HTMLElement;
    if (container) {
      const amount = direction * 120;
      container.scrollLeft += amount;
    }
  }

  getPlaceIdWise(): void {
    const urlParam = {
      spotId: this.heroId,
    };
    this.dataService.getDataWithId(urlParam).subscribe(
      (success) => {
        this.datas = success.result[0];
      
      },
      (error) => {
        console.log("datas 109", this.datas);
        console.error('Error fetching place details', error);
      }
    );
  }

  
 
  
  selectDate(selectDate: dates): void {
    this.dates.forEach((date) => (date.selected = false));
    selectDate.selected = true;
  }
  bookNow(heroId: string) {
    this.router.navigate(['/booknow', heroId]);
    console.log('heroid', heroId);
  }
}
