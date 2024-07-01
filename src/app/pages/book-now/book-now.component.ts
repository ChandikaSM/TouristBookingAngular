import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataPlacesService } from '../data-places.service';
import { AuthComponent } from '../authentication/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookNowService } from './book-now.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { authConst } from '../authentication/authConst';

interface item {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelect, MatOptionModule],
})
export class BookNowComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  date: Date | null = null;
  paymentOption: string = '';
  childQuantity = 1;
  adultQuantity = 1;
  booking: any = {};
  headers: any;
  items: item[] = [
    {value: 'monday', viewValue:'09:00 a.m. - 05:00 p.m.'},
    {value: 'tuesday', viewValue:'09:00 a.m. - 05:00 p.m.'},
    {value: 'wednesday', viewValue:'09:00 a.m. - 05:00 p.m.'},
    {value: 'thursday', viewValue:'09:00 a.m. - 05:00 p.m.'},
    {value: 'friday', viewValue:'09:00 a.m. - 05:00 p.m.'},
    {value: 'saturday',viewValue: '9:00 a.m. - 05:00 p.m.'}



  ]

  sum = 0;
  constructor(
    private bookNow: BookNowService,
    private dialog: MatDialog,
    private router: Router
  ) {
    const authToken = localStorage.getItem(authConst.authToken)
    this.headers = authToken
  }


  
  onSubmit(): void {
    console.log(
      'Form submitted:',
      this.booking
    );
    this.onBookNow();
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.date = null;
    this.paymentOption = '';
  }

  decreaseChildQuantity() {
    if (this.childQuantity > 0) {
      this.childQuantity--;
      this.total();
    }
  }
  decreaseAdultQuantity() {
    if (this.adultQuantity > 0) {
      this.adultQuantity--;
      this.total();
    }
  }

  increaseChildQuantity() {
    console.log('true');
    if (this.childQuantity < 10) {
      this.childQuantity++;
      this.total();
    } else {
      alert('Maximum Limit Reached');
    }
  }

  increaseAdultQuantity() {
    if (this.adultQuantity < 10) {
      this.adultQuantity++;
      this.total();
    } else {
      alert('max');
    }
  }
  total(): void {
    const child = 20;
    const adult = 40;
    this.sum = this.childQuantity * child + this.adultQuantity * adult;
  }
  onBookNow(): void {
    this.bookNow.processBooking(this.booking)
    .subscribe(
      (response) => {
        console.log('booking success', response);
      },
      (error) => {
        console.error('booking failed', error);
      }
    )

    // alert('book now first');
    // this.showLoginDialog();
  }
  showLoginDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: window.innerWidth < 768 ? '100%' : '1000px',
      maxWidth: '90%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        alert('Your booking has been initiated.');
        this.router.navigate(['/booknow']);
      }
    });
  }
}
