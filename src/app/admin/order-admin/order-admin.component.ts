import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OrderAdminService } from './order-admin.service';
import { authConst } from '../../pages/authentication/authConst';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Spot {
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
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTableModule],
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss']
})
export class OrderAdminComponent implements OnInit{
  isOpenAdding = false;
  spot: Spot = {
    name: '',
    description: '',
    location: '',
    district: '',
    category: '',
    entry_fee: { adult: 0, child: 0 },
    images: [],
    visiting_hours: {}
  };
  tableDatas: Spot[] = [
    {
      name: '1',
      description: 'hello',
      location: '565',
      district: 'h',
      category: 'g',
      entry_fee: { adult: 0, child: 0 },
      images: [],
      visiting_hours: {}
    }
  ];
  
  displayedColumns: string[] = ['name', 'description', 'location', 'district', 'category', 'entry_fee_adult', 'entry_fee_child','edit', 'delete'];
  dataSource = new MatTableDataSource(this.tableDatas);
  days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  fileNames: string[] = [];
  selectedFiles: File[] = [];
  imageError: boolean = false;
  headers: any;
  datas: any;

  constructor(private adminService: OrderAdminService, private snackBar: MatSnackBar) {
    const authToken = authConst.authToken;
    this.headers = authToken;
  }
  
 ngOnInit(): void {
   this.loadSpotData();
 }

  loadSpotData(): void {
    this.adminService.getSpot().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource.data = response.result;
      },
      error => {
        console.error('Error fetching spot data:', error);
      }
    );
  }

  addingItems(): void {
    this.isOpenAdding = !this.isOpenAdding;
  }

  addSpot(): void {
    this.tableDatas.push({ ...this.spot });
    this.dataSource.data = this.tableDatas;
    this.spot = {
      name: '',
      description: '',
      location: '',
      district: '',
      category: '',
      entry_fee: { adult: 0, child: 0 },
      images: [],
      visiting_hours: {}
    };
    this.isOpenAdding = false;
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      if (this.selectedFiles.length < 3) {
        this.selectedFiles.push(files[i]);
      }
    }
    
    if (this.selectedFiles.length > 3) {
      this.selectedFiles = this.selectedFiles.slice(0, 3);
    }
    
    if (this.selectedFiles.length === 3) {
      this.imageError = false;
    } else {
      this.imageError = true;
    }

    this.fileNames = this.selectedFiles.map(file => file.name);
    this.spot.images = this.selectedFiles.map(file => ({ fileName: file.name }));
  }

  updatespots(id: string):void {
    const urlParam = {
      spotId: id,
    };

    this.adminService.updatespot(urlParam).subscribe(
      () => {
        this.snackBar.open('edited success', 'close', {
          duration: 4000,
        });
        this.loadSpotData();
      }
    )

  }
  deleteSpots(id: string):void {
    const urlParam = {
      spotId: id,
    };
    console.log(id);
    this.adminService.deleteSpot(urlParam).subscribe(
      () => {
        this.snackBar.open('spot deleted successflly', 'close', {
          duration: 3000,
        });
        this.loadSpotData();
      }
    )
  }
  


  onSubmit(): void {
    const formData = new FormData();
    formData.append('basic', JSON.stringify(this.spot));
    this.selectedFiles.forEach(file => {
      formData.append('photos', file, file.name);
    });

    this.adminService.postSpotData(formData).subscribe(
      response => {
        console.log('Spot added successfully:', response);
        window.location.reload();
        this.isOpenAdding= false;
        
      },
      error => {
        console.error('Error adding spot:', error);
      }
    );
  }
}