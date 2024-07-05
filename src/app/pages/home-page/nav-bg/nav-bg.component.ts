import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { NavBgService } from './nav-bg.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-nav-bg',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NavBarComponent,
  ],
  templateUrl: './nav-bg.component.html',
  styleUrl: './nav-bg.component.scss',

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavBgComponent implements OnInit {
  control = new FormControl('');
  searchQuery: any[] = [];
  filteredSearch!: Observable<any[]>;

  constructor(private dataService: NavBgService, private router: Router) {}

  ngOnInit(): void {
    this.getSearch();
    this.filteredSearch = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  getSearch(): void {
    this.dataService.getSearchData().subscribe((sucess: any) => {
      this.searchQuery = sucess.result;
    });
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.searchQuery.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  searchItem(event: Event): void {
    event?.preventDefault();
    this.router.navigate(['placelist'], {queryParams: {search: this.searchItem}});
  }
}
