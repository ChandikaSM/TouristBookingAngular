import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {register} from 'swiper/element-bundle';


register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  // ntemplate error k liye use hota hai , avoid any ntemplate error
})
export class SliderComponent {
  images: string[] = [
    'assets/sign.png',
    'assets/login.png',
    'assets/meta.jpg',
    'assets/sign.png',
    'assets/login.png',
    'assets/meta.jpg',
    'assets/sign.png',
    'assets/login.png',
    'assets/meta.jpg'
  ];
 


}
