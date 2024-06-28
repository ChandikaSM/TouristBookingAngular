// import { Component, OnInit, inject } from '@angular/core';
// import { MatButton, MatButtonModule } from '@angular/material/button';
// import { provideNativeDateAdapter } from '@angular/material/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   FormsModule,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon';
// import { RouterLink } from '@angular/router';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatSelect } from '@angular/material/select';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-book-now',
//   standalone: true,
//   imports: [
//     MatButton,
//     MatDatepickerModule,
//     MatInputModule,
//     MatFormFieldModule,
//     RouterLink,
//     MatIconModule,
//     MatStepperModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatInputModule,
//     MatButtonModule,
//     MatSelect,
//   ],
//   templateUrl: './book-now.component.html',
//   styleUrl: './book-now.component.scss',
// })
// export class BookNowComponent implements OnInit {
//   firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
//   secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
//   thirdFormGroup: FormGroup = this._formBuilder.group({ thirdCtrl: [''] });
//   fourthFormGroup: FormGroup = this._formBuilder.group({ fourCtrl: [''] });
//   fifthFormGroup: FormGroup = this._formBuilder.group({ fiveCtrl: [''] });
//   adultQuantity: number = 1;
//   childQuantity: number = 1;
//   quantityOptions: number[] = [1, 2, 3, 4, 5];
//   durationInSeconds = 5;
//   constructor(
//     private _formBuilder: FormBuilder,
//     private _snackBar: MatSnackBar
//   ) {}

//   ngOnInit() {
//     this.fifthFormGroup = this._formBuilder.group({
//       adultQuantity: [this.adultQuantity, Validators.required],
//       childQuantity: [this.childQuantity, Validators.required],
//     });
//   }

//   snackBar() {
//     this._snackBar.open('Full filled details first', 'Close', {
//       duration: 3000,
//       verticalPosition: 'top',
//     });
//   }
//   isFormValid(formGroup: FormGroup): boolean {
//     return formGroup.valid;
//   }

//   decreaseChildQuantity() {
//     console.log('true');
//     if (this.childQuantity > 0) {
//       this.childQuantity--;
//     }
//   }
//   decreaseAdultQuantity() {
//     if (this.adultQuantity > 0) {
//       this.adultQuantity--;
//     }
//   }

//   increaseChildQuantity() {
//     console.log('true');
//     if (this.childQuantity < 10) {
//       this.childQuantity++;
//     } else {
//       alert('Maximum Limit Reached');
//     }
//   }

//   increaseAdultQuantity() {
//     if (this.adultQuantity < 10) {
//       this.adultQuantity++;
//     } else {
//       alert('max');
//     }
//   }
// }


// booking.component.ts

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataPlacesService } from '../data-places.service';

@Component({
  selector: 'app-booking',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class BookNowComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  date: Date | null = null;
  paymentOption: string = '';
  childQuantity = 1;
  adultQuantity = 1;
  sum = 0;
  constructor(private dataService: DataPlacesService) {}

  onSubmit(): void {
    // Perform booking logic here, e.g., submit data to a service or API
    console.log('Form submitted:', this.name, this.email, this.phone, this.date, this.paymentOption);
    // Reset form fields after submission (optional)
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
    //     console.log('true');
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
      total():void {
        const child = 20;
        const adult = 40;
        this.sum = this.childQuantity * child + this.adultQuantity * adult;
      }
      // total(): void {
      //   this.dataService.getData().subscribe(
      //     (prices) => {
      //       const child = prices.child;
      //       const adult = prices.adult;
      //       this.sum = this.childQuantity * child + this.adultQuantity * adult;
      //     }, (error) =>{
      //       console.error(error);
      //     }
      //   )
  
      // }
}

