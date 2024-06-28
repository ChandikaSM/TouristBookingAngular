import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataPlacesService } from '../../data-places.service';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';

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
  searchQuery: string[] = ['Bashgram', 'Udaipur', 'Ujjayanta Palace'];

  constructor(private dataService: DataPlacesService) {}
  filteredSearch: Observable<string[]> = new Observable<string[]>();

  ngOnInit(): void {
    this.filteredSearch = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
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
  searchItem($event: any): void {}
}
