import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthComponent } from '../authentication/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookNowService } from './book-now.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { authConst } from '../authentication/authConst';
import { NavBarComponent } from '../home-page/nav-bar/nav-bar.component';
import { DatePipe } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
interface item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelect,
    MatOptionModule,
    NavBarComponent,
  ],
  providers: [DatePipe],
})
// export class BookNowComponent implements OnInit {
//   name: string = '';
//   Email: string = '';
//   mobile: string = '';
//   date: string = '';
//   heroId: string = '';
//   paymentOption: string = '';
//   childQuantity = 1;
//   adultQuantity = 1;
//   booking: any = {};
//   headers: any;
//   durationInSeconds = 5;
//   minDate: string = '';

//   items: item[] = [
//     { value: 'monday', viewValue: '09:00 a.m. - 05:00 p.m.' },
//     { value: 'tuesday', viewValue: '09:00 a.m. - 05:00 p.m.' },
//     { value: 'wednesday', viewValue: '09:00 a.m. - 05:00 p.m.' },
//     { value: 'thursday', viewValue: '09:00 a.m. - 05:00 p.m.' },
//     { value: 'friday', viewValue: '09:00 a.m. - 05:00 p.m.' },
//     { value: 'saturday', viewValue: '9:00 a.m. - 05:00 p.m.' },
//   ];

//   sum = 0;

//   constructor(
//     private bookNow: BookNowService,
//     private dialog: MatDialog,
//     private router: Router,
//     private activeRouter: ActivatedRoute,
//     private datePipe: DatePipe,
//     private _snackBar: MatSnackBar
//   ) {
//     const authToken = localStorage.getItem(authConst.authToken);
//     this.headers = { Authorization: `Bearer ${authToken}` };
//   }

//   ngOnInit(): void {
//     this.activeRouter.queryParams.subscribe((params) => {
//       if (params['heroId']) {
//         this.heroId = params['heroId'];
//       }
//     });
//     this.setMinDate();
//   }


//   setMinDate():void {
//     const currentDate = new Date();
//     this.minDate = this.datePipe.transform(this.date, 'dd-MM-yyyy') || '';

  

//   }
//   onSubmit(): void {

//     const booking = {
//       spotId: this.heroId,
//       name: this.name,
//       mobile: this.mobile,
//       Email: this.Email,
//       date: this.date,
//       quantity: {
//         adult: this.adultQuantity,
//         child: this.childQuantity,
//       },
//       total: this.sum,
//     };
//     console.log('date', this.date);

//     this.onBookNow(booking);
//   }

//   validateDate(event: any): void {
//     const selectedDate = new Date(event.target.value);
//     const currentDate = new Date();
//     if (selectedDate < currentDate) {
//       this.date = '';
//     }
//   }

//   resetForm(): void {
//     this.name = '';
//     this.Email = '';
//     this.mobile = '';
//     this.date = '';
//   }

//   decreaseChildQuantity() {
//     if (this.childQuantity > 0) {
//       this.childQuantity--;
//       this.total();
//     }
//   }
//   decreaseAdultQuantity(): void {
//     if (this.adultQuantity > 0) {
//       this.adultQuantity--;
//       this.total();
//     }
//   }

//   increaseChildQuantity() {
//     if (this.childQuantity < 10) {
//       this.childQuantity++;
//       this.total();
//     } else {
//       alert('Maximum Limit Reached');
//     }
//   }

//   increaseAdultQuantity() {
//     if (this.adultQuantity < 10) {
//       this.adultQuantity++;
//       this.total();
//     } else {
//       alert('max');
//     }
//   }
//   total(): void {
//     const child = 20;
//     const adult = 40;
//     this.sum = this.childQuantity * child + this.adultQuantity * adult;
//   }

//   onBookNow(booking: any): void {
//     console.log('bokking ', booking);
//     this.bookNow.processBooking(booking).subscribe(
//       (response) => {
//         console.log(response);

//         if (response.status) {
//           this.resetForm();
//           this.openSnackBar();
//         }
//       },
//       (error) => {
//         console.error('error', error);
//       }
//     );
//   }

//   showLoginDialog(): void {
//     const dialogRef = this.dialog.open(AuthComponent, {
//       width: window.innerWidth < 768 ? '100%' : '1000px',
//       maxWidth: '90%',
//     });

//     dialogRef.afterClosed().subscribe((result: any) => {
//       if (result === 'success') {
//         alert('Your booking has been initiated.');
//       }
//     });
//   }

//   openSnackBar() {
//     this._snackBar.open(
//       'Your booking has been initiated. Thank you',
//       'Dismiss',
//       {
//         duration: this.durationInSeconds * 1000,
//       }
//     );
//     this.navigating();
//   }
//   navigating(): void {
//     console.log('navigating');

//     this.router.navigate(['']);
//   }
// }


export class BookNowComponent implements OnInit {
  name: string = '';
  Email: string = '';
  mobile: string = '';
  date: string = '';
  heroId: string = '';
  paymentOption: string = '';
  childQuantity = 1;
  adultQuantity = 1;
  booking: any = {};
  headers: any;
  durationInSeconds = 5;
  minDate: string = '';

  items = [
    { value: 'monday', viewValue: '09:00 a.m. - 05:00 p.m.' },
    { value: 'tuesday', viewValue: '09:00 a.m. - 05:00 p.m.' },
    { value: 'wednesday', viewValue: '09:00 a.m. - 05:00 p.m.' },
    { value: 'thursday', viewValue: '09:00 a.m. - 05:00 p.m.' },
    { value: 'friday', viewValue: '09:00 a.m. - 05:00 p.m.' },
    { value: 'saturday', viewValue: '9:00 a.m. - 05:00 p.m.' },
  ];

  sum = 0;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.setMinDate();
  }

  setMinDate(): void {
    const currentDate = new Date();
    this.minDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd') || '';
  }

  validateDate(event: any): void {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      this.date = '';
    }
  }

  onSubmit(): void {
    const booking = {
      spotId: this.heroId,
      name: this.name,
      mobile: this.mobile,
      Email: this.Email,
      date: this.date,
      quantity: {
        adult: this.adultQuantity,
        child: this.childQuantity,
      },
      total: this.sum,
    };
    console.log('date', this.date);

    // Call your booking service or method here
    // this.onBookNow(booking);
  }

  resetForm(): void {
    this.name = '';
    this.Email = '';
    this.mobile = '';
    this.date = '';
  }

  decreaseChildQuantity(): void {
    if (this.childQuantity > 0) {
      this.childQuantity--;
      this.total();
    }
  }

  decreaseAdultQuantity(): void {
    if (this.adultQuantity > 0) {
      this.adultQuantity--;
      this.total();
    }
  }

  increaseChildQuantity(): void {
    if (this.childQuantity < 10) {
      this.childQuantity++;
      this.total();
    } else {
      alert('Maximum Limit Reached');
    }
  }

  increaseAdultQuantity(): void {
    if (this.adultQuantity < 10) {
      this.adultQuantity++;
      this.total();
    } else {
      alert('Maximum Limit Reached');
    }
  }

  total(): void {
    const child = 20;
    const adult = 40;
    this.sum = this.childQuantity * child + this.adultQuantity * adult;
  }
}