import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataPlacesService } from '../data-places.service';
import { AuthComponent } from '../authentication/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss'],
  standalone: true,
  imports: [FormsModule],
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
  sum = 0;
  constructor(
    private dataService: DataPlacesService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  onSubmit(): void {
    console.log(
      'Form submitted:',
      this.name,
      this.email,
      this.phone,
      this.date,
      this.paymentOption
    );
    this.resetForm();
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
    alert('book now first');
    this.showLoginDialog();
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
