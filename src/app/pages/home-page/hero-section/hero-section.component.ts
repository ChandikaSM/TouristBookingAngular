import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataPlacesService } from '../../data-places.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButton, RouterLink, HttpClientModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit {
  datas: any;
  heroId: any;
  constructor(
    private dataService: DataPlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.heroId = params.get('id');
    });
    console.log(this.heroId);
    // Alternatively, use HeroService to get the id
    this.getPlaceIdWise();
  }

  getPlaceIdWise(): void {
    const urlParam = {
      spotId: this.heroId
    }
    this.dataService.getDataWithId(urlParam).subscribe(
      (success) => {
        console.log(success)
        // console.log(places)
        this.datas = success.result[0];
        console.log(this.datas)
      },
      (error) => {
        console.error('Error fetching place details', error);
      }
    );
  }
}
