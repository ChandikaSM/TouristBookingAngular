import { TestBed } from '@angular/core/testing';

import { PlaceListService } from './place-list.service';

describe('PlaceListService', () => {
  let service: PlaceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
