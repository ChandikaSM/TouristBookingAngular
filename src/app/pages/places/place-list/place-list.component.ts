import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../home-page/nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { placeList } from '../../status-user/status-user.component';
import { PlaceListService } from './place-list.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-list',
  standalone: true,
  imports: [NavBarComponent, MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.scss',
})
export class PlaceListComponent implements OnInit {
  datas: any[] = [];

  constructor(private placeService: PlaceListService, private router: Router) {}

  ngOnInit(): void {
    this.getSpots();
  }

  getSpots(): void {
    this.placeService.getData().subscribe((datas: any) => {
      this.datas = datas.result;
    });
  }

  onClickPlaces(id: string): void {
    this.router.navigate(['/herodetails', id]);
  }
}
