



import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from "@angular/material/table"
import { RouterLink } from '@angular/router';



export interface PeriodicElement {
  name: string;
  orderId: number;
  ticket: string;
  place: string;
  price: number;
  date: Date;
  downloadUrl: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {orderId: 1, name: 'Sushmita Majumder', place: 'udaipur Matabari', ticket: '#7894', price: 78, date: new Date('2023-07-12') , downloadUrl: 'assets/testing.pdf'},
  {orderId: 2, name: 'Sushmita Majumder', place: 'Jagannath Mandir', ticket: '#7899',price: 89, date:new Date('2024-07-12'), downloadUrl: 'assets/testing.pdf'},
  {orderId: 3, name: 'Sushmita Majumder', place: 'Chobimura', ticket: '#75678', price:90, date: new Date('2025-07-12'), downloadUrl:'assets/testing.pdf'},
  // {orderId: 2, name: 'Jagriti Paul', place: 'udaipur Matabari', ticket: '#75678', price:90, date: 12/6/24, downloadUrl:'assets/testing.pdf'},
  // {orderId: 1, name: 'Parinita Das', place: 'udaipur Matabari', ticket: '#75678', price:90, date: 2/6/24, downloadUrl:'assets/testing.pdf'},
  // {orderId: 1, name: 'Samarjit Ghosh', place: 'udaipur Matabari', ticket: '#75678', price:90, date: '12/6/24', downloadUrl:'assets/testing.pdf'},
  // {orderId: 1, name: 'Swarupa Paul', place: 'udaipur Matabari', ticket: '#75678', price:90, date: '12/6/24', downloadUrl:'assets/testing.pdf'},
  // {orderId: 1, name: 'Sunanda Majumder', place: 'udaipur Matabari', ticket: '#75678', price:90, date: '12/6/24', downloadUrl:'assets/testing.pdf'},
  // {orderId: 1, name: 'Manisha Banik Majumder', place: 'udaipur Matabari', ticket: '#75678', price:90, date: '12/6/24', downloadUrl:'assets/testing.pdf'},
  // {orderId: 1, name: 'Sneha Majumder', place: 'udaipur Matabari', ticket: 500},
  // {orderId: 1, name: 'Sankar Majumder', place: 'udaipur Matabari', ticket: 20},
  // {orderId: 1, name: 'Abhijit Choudhury', place: 'udaipur Matabari', ticket: 800},
  // {orderId: 1, name: '', place: 'udaipur Matabari', ticket: 1000},

];
@Component({
  selector: 'app-status-user',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIcon, MatChipSet, MatChip, CommonModule, RouterLink, MatAutocompleteModule, FormsModule],
  templateUrl: './status-user.component.html',
  styleUrl: './status-user.component.scss'
})



export class StatusUserComponent {
  displayedColumns: string[] = ['Order Id', 'name', 'place', 'ticket', 'price', 'date', 'download'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filterValue: string = '';
  completedItems: PeriodicElement[] = [];
  upComing : PeriodicElement[] = [];
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  ngOnInit():void  {
    this.showCompleted();
    this.showUpcoming();
    this.autoComplete();
  }

  
  downloadItem(element: PeriodicElement){
    console.log('Download clicked for:', element);
    const url = element.downloadUrl;
    window.open(url, '_blank');
      }
      showCompleted():void {
        console.log(this.dataSource);
        const today = new Date();
       this.completedItems = ELEMENT_DATA.filter(item => item.date < today);
        console.log("completed items", this.completedItems);
      
      }
      showUpcoming(): void {
        const today = new Date();
        this.upComing = ELEMENT_DATA.filter(item => item.date > today);
       console.log("upcoming 2 items line 83", this.upComing);
      }

      toggleItems(showCompleted: boolean, showUpcoming: boolean):void {
        if(showCompleted){
          this.dataSource.data = this.completedItems;

        } else if(showUpcoming){
          this.dataSource.data = this.upComing;
        } else {
          this.dataSource.data = ELEMENT_DATA;
        }
      }

  applyFilter(event: Event): void {
    event.preventDefault();
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  autoComplete():void {
    this.myControl = new FormControl('');
   
  }


  
}
