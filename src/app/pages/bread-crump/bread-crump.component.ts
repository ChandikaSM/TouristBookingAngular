import { Component } from '@angular/core';
import { BreadcrumbModule } from '@coreui/angular';

@Component({
  selector: 'app-bread-crump',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './bread-crump.component.html',
  styleUrl: './bread-crump.component.scss'
})
export class BreadCrumpComponent {

}
