import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../../data-places.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../authentication/login/login.service';
import { LoginComponent } from '../../authentication/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButton, RouterLink, HttpClientModule, CommonModule, MatIcon],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit {
  datas: any;
  heroId: any;
  daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor(
    private dataService: DataPlacesService,
    private route: ActivatedRoute,
    private router: Router,
    public loginService: LoginService,
    private dialog: MatDialog
  ) {}

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
  showLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.router.navigate(['/booknow']);
      }
    });
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
        console.error('Error fetching place details', error);
      }
    );
  }
}
