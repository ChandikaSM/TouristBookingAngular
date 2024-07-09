import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OrderAdminService } from './order-admin.service';
import { authConst } from '../../pages/authentication/authConst';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Spot {
  _id: string;
  name: string;
  description: string;
  location: string;
  district: string;
  category: string;
  entry_fee: {
    adult: number;
    child: number;
  };
  images: Array<{ fileName: string }>;
  visiting_hours: {
    [key: string]: string;
  };
  editMode?: boolean;
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTableModule],
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss'],
})

export class OrderAdminComponent implements OnInit {
  isOpenAdding = false;
  spot: Spot = {
    _id: '',
    name: '',
    description: '',
    location: '',
    district: '',
    category: '',
    entry_fee: { adult: 0, child: 0 },
    images: [],
    visiting_hours: {},
  };
  tableDatas: Spot[] = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'location',
    'district',
    'category',
    'entry_fee_adult',
    'entry_fee_child',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource<Spot>(this.tableDatas);
  days: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  fileNames: string[] = [];
  selectedFiles: File[] = [];
  imageError: boolean = false;

  constructor(
    private adminService: OrderAdminService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadSpotData();
  }

  loadSpotData(): void {
    this.adminService.getSpot().subscribe(
      (response: any) => {
        this.tableDatas = response.result;
        this.dataSource.data = this.tableDatas;
      },
      (error) => {
        console.error('Error fetching spot data:', error);
      }
    );
  }

  addingItems(): void {
    this.isOpenAdding = !this.isOpenAdding;
  }

  updatespots(id: string): void {
    const spotToUpdate = this.tableDatas.find((spot) => spot._id === id);
    if (spotToUpdate) {
      this.adminService.updatespot(id, spotToUpdate).subscribe(
        () => {
          this.snackBar.open('Spot updated successfully', 'Close', {
            duration: 4000,
          });
          spotToUpdate.editMode = false;
        },
        (error: any) => {
          console.error('Error updating spot:', error);
        }
      );
    }
  }

  deleteSpots(id: string): void {
    const urlParam = {
      spotId: id,
    }
    this.adminService.deleteSpot(urlParam).subscribe(
      () => {
        this.snackBar.open('Spot deleted successfully', 'Close', {
          duration: 3000,
        });
        this.loadSpotData();
        window.location.reload();
      },
      (error: any) => {
        console.error('Error deleting spot:', error);
      }
    );
  }

  toggleEditMode(element: Spot): void {
    element.editMode = !element.editMode;
  }


  cancelEdit(element: Spot): void {

    const originalSpot = this.tableDatas.find(
      (item) => item._id === element._id
    );
    if (originalSpot) {
      Object.assign(element, originalSpot);
    }
    element.editMode = false;
  }

  saveChanges(element: Spot): void {
    this.updatespots(element._id);
    window.location.reload();
    // element.editMode = false;
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    this.selectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      if (this.selectedFiles.length < 3) {
        this.selectedFiles.push(files[i]);
      }
    }

    if (this.selectedFiles.length === 3) {
      this.imageError = false;
    } else {
      this.imageError = true;
    }

    this.fileNames = this.selectedFiles.map((file) => file.name);
    this.spot.images = this.selectedFiles.map((file) => ({
      fileName: file.name,
    }));
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('basic', JSON.stringify(this.spot));
    this.selectedFiles.forEach((file) => {
      formData.append('photos', file, file.name);
    });

    this.adminService.postSpotData(formData).subscribe(
      (response) => {
        console.log('Spot added successfully:', response);
        this.loadSpotData();
        this.isOpenAdding = false;
      },
      (error) => {
        console.error('Error adding spot:', error);
      }
    );
  }
}
