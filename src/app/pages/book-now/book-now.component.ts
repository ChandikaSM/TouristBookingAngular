import { Component, OnInit, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [
    MatButton,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelect,
  ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss',
})
export class BookNowComponent implements OnInit {
  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  thirdFormGroup: FormGroup = this._formBuilder.group({ thirdCtrl: [''] });
  fourthFormGroup: FormGroup = this._formBuilder.group({ fourCtrl: [''] });
  fifthFormGroup: FormGroup = this._formBuilder.group({ fiveCtrl: [''] });
  adultQuantity: number = 1;
  childQuantity: number = 1;
  quantityOptions: number[] = [1, 2, 3, 4, 5];
  durationInSeconds = 5;
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fifthFormGroup = this._formBuilder.group({
      adultQuantity: [this.adultQuantity, Validators.required],
      childQuantity: [this.childQuantity, Validators.required],
    });
  }

  snackBar() {
    this._snackBar.open('Full filled details first', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
  isFormValid(formGroup: FormGroup): boolean {
    return formGroup.valid;
  }

  decreaseChildQuantity() {
    console.log('true');
    if (this.childQuantity > 0) {
      this.childQuantity--;
    }
  }
  decreaseAdultQuantity() {
    if (this.adultQuantity > 0) {
      this.adultQuantity--;
    }
  }

  increaseChildQuantity() {
    console.log('true');
    if (this.childQuantity < 10) {
      this.childQuantity++;
    } else {
      alert('Maximum Limit Reached');
    }
  }

  increaseAdultQuantity() {
    if (this.adultQuantity < 10) {
      this.adultQuantity++;
    } else {
      alert('max');
    }
  }
}
