import { TestBed } from '@angular/core/testing';

import { NavBgService } from './nav-bg.service';

describe('NavBgService', () => {
  let service: NavBgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
