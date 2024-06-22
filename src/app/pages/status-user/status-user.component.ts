



import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from "@angular/material/table"



export interface PeriodicElement {
  name: string;
  orderId: number;
  ticket: string;
  place: string;
  price: number;
  date: string;
  downloadUrl: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {orderId: 1, name: 'Sushmita Majumder', place: 'udaipur Matabari', ticket: '#7894', price: 78, date: '12/07/24', downloadUrl: 'assets/testing.pdf'},
  {orderId: 2, name: 'Sushmita Majumder', place: 'Jagannath Mandir', ticket: '#7899',price: 89, date: '15/09/24', downloadUrl: 'assets/testing.pdf'},
  {orderId: 3, name: 'Sushmita Majumder', place: 'Chobimura', ticket: '#75678', price:90, date: '12/6/24', downloadUrl:'assets/testing.pdf'},
  // {orderId: 2, name: 'Jagriti Paul', place: 'udaipur Matabari', ticket: 40},
  // {orderId: 1, name: 'Parinita Das', place: 'udaipur Matabari', ticket: 100},
  // {orderId: 1, name: 'Samarjit Ghosh', place: 'udaipur Matabari', ticket: 0.0},
  // {orderId: 1, name: 'Swarupa Paul', place: 'udaipur Matabari', ticket: 70},
  // {orderId: 1, name: 'Sunanda Majumder', place: 'udaipur Matabari', ticket: 200},
  // {orderId: 1, name: 'Manisha Banik Majumder', place: 'udaipur Matabari', ticket: 130},
  // {orderId: 1, name: 'Sneha Majumder', place: 'udaipur Matabari', ticket: 500},
  // {orderId: 1, name: 'Sankar Majumder', place: 'udaipur Matabari', ticket: 20},
  // {orderId: 1, name: 'Abhijit Choudhury', place: 'udaipur Matabari', ticket: 800},
  // {orderId: 1, name: '', place: 'udaipur Matabari', ticket: 1000},

];
@Component({
  selector: 'app-status-user',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIcon, MatChipSet, MatChip, CommonModule],
  templateUrl: './status-user.component.html',
  styleUrl: './status-user.component.scss'
})



export class StatusUserComponent {
  displayedColumns: string[] = ['Order Id', 'name', 'place', 'ticket', 'price', 'date', 'download'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 upComingEvents: any[] = [];
 completedEvents: any[] = [];
 showUpComingEvents = false;
  toggleUpcomingEvents() {
    this.showUpComingEvents = !this.showUpComingEvents;
  }

  toggleCompletedUpcomingEvents() {
    this.showUpComingEvents = false;
  }
 constructor(){
  this.categorizeEvents();
 }


 categorizeEvents() {
  const currentDate = new Date();
  this.dataSource.data.forEach((event: PeriodicElement) => {
    const eventDate = new Date(event.date);
    if (eventDate > currentDate) {
      this.upComingEvents.push(event);
    } else {
      this.completedEvents.push(event);
    }
  });
}
  
  downloadItem(element: PeriodicElement){
    console.log('Download clicked for:', element);
    const url = element.downloadUrl;
    window.open(url, '_blank');
      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
