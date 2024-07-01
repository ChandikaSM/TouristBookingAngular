import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataPlacesService } from '../../data-places.service';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { NavBgService } from './nav-bg.service';

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
  searchQuery: string[] = [];

  constructor(private dataService: NavBgService) {}
  filteredSearch: Observable<string[]> = new Observable<string[]>();


  ngOnInit(): void {
    this.filteredSearch = this.control.valueChanges.pipe(
      startWith(''),
    map((value) => this._filter(value || ''))
    );
 this.getSearch();
  
  }

  getSearch():void {
    this.dataService.getSearchData().subscribe((sucess: any)=> {
      console.log(sucess);
      this.searchQuery = sucess.result;
      console.log("searchd data", this.searchQuery);
      this.searchQuery = sucess
    
    });
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.searchQuery.filter((search) =>
      this._normalizeValue(search).includes(filterValue)
    );
  }
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  searchItem($event: any): void {
    // console.log('values', event.option.value)
  }
}
