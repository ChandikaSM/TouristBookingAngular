import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataPlacesService } from '../../data-places.service';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { NavBgService } from './nav-bg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bg',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './nav-bg.component.html',
  styleUrl: './nav-bg.component.scss',

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavBgComponent implements OnInit {
  control = new FormControl('');
  searchQuery: any;

  constructor(private dataService: NavBgService, private router: Router) {}
  filteredSearch: Observable<string[]> = new Observable<string[]>();

  ngOnInit(): void {
    this.getSearch();
  }

  getSearch(): void {
    this.dataService.getSearchData().subscribe((sucess: any) => {
      console.log(sucess);
      this.searchQuery = sucess.result;
    });
  }
  private _filter(value: string): any[] {
    const filterValue = this._normalizeValue(value || '');
    if (!filterValue) {
      return [];
    }
    return this.searchQuery.filter((search: string) =>
      this._normalizeValue(search).includes(filterValue)
    );
  }
  private _normalizeValue(value: string): string {
    if (!value) {
      return '';
    }

    return value.toLowerCase();
  }

  searchItem(event: Event): void {
    event?.preventDefault();
    this.router.navigate(['herosection']);
    console.log('datas', this.control.value);
    
  }
}
