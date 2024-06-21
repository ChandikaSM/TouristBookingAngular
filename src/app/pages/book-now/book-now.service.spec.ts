import { TestBed } from '@angular/core/testing';

import { BookNowService } from './book-now.service';

describe('BookNowService', () => {
  let service: BookNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
