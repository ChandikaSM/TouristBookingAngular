import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element-bundle';

register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent {
  images: string[] = [
    'https://media.istockphoto.com/id/1291430620/photo/unakoti-in-tripura-india.jpg?s=2048x2048&w=is&k=20&c=RhrV0hCxU_bmH51St0pS5vAIGX1Ens3Do9RUlqyEo1A=',
    'https://media.istockphoto.com/id/1490046404/photo/boats-parked-near-riverbank.jpg?s=2048x2048&w=is&k=20&c=3hwj2y0utWZqjRwQWbkkqRpaIIf53KM4-In9iuahhAs=',
    'https://live.staticflickr.com/7148/6683679979_10aa52c740_b.jpg',
    'https://media.istockphoto.com/id/1292258648/photo/agartala-in-tripura-india.jpg?s=2048x2048&w=is&k=20&c=rTED30oiE9PKI4mpA7s92Kn8m4lHEV9Br5_-RGa9ZOM=',
  ];
}
