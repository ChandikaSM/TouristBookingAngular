import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
// import { HomePageService } from '../home-page/home-page.service';
// import { Interface } from '';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButton, NgIf, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
// items: any[] = [];
// trackBy(index:number , item:any): number {
//   return item.id;
// }
// constructor(private dataService: HomePageService){}
// ngOnInit(): void {
//   // this.dataService.getData().subscribe((items: any)=>{
//   //   console.log(items);
//   //   this.items = items.result;

//   // }, (error) => {
//   //   console.error ('Error Fetching data:', error);
//   // });
// }

// hasEntryFee(item: Interface): boolean {
//   return !!item.entry_fee;
// }

// hasPhotos(item: Interface):boolean {
//   return !!item.photos;
// }
}
