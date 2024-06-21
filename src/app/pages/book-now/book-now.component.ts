import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

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
  ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss',
})
export class BookNowComponent implements OnInit {
  childQuantity = 1;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    console.log('yessssssssssssssssssss');
  }
  snackBar(): void{
    alert("Payment Successful");
    this._router.navigate(['/status']);
  }

  decreaseChildQuantity() {
    console.log('true');
    if (this.childQuantity > 0) {
      this.childQuantity--;
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
}
