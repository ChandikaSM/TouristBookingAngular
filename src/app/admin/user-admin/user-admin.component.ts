import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface element {
  name: string;
  position: number;
  place: string;
  approve: string;
  reject: string;
  status: string;
  isApproved: boolean;
}
const data: element[] = [
  {
    position: 1,
    name: 'Hydrogen',
    place: 'ujja',
    approve: 'task_alt',
    reject: 'cancel',
    status: '',
    isApproved: false,
  },
  {
    position: 2,
    name: 'Hydrogen',
    place: 'ujja',
    approve: 'task_alt',
    reject: 'cancel',
    status: '',
    isApproved: false,
  },
  {
    position: 1,
    name: 'Hydrogen',
    place: 'ujja',
    approve: 'task_alt',
    reject: 'cancel',
    status: '',
    isApproved: false,
  },
];

@Component({
  selector: 'app-user-admin',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.scss',
})
export class UserAdminComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'place',
    'approve',
    'reject',
    'status',
  ];
  dataSource = data;

  approve(element: element): void {
    element.status = 'approved';
    element.isApproved = true;
  }

  reject(element: element): void {
    element.status = 'rejected';
    element.isApproved = true;
  }
}
