import { TestBed } from '@angular/core/testing';

import { DataPlacesService } from './data-places.service';

describe('DataPlacesService', () => {
  let service: DataPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
