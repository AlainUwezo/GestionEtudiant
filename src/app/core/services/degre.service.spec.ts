import { TestBed } from '@angular/core/testing';

import { DegreService } from './degre.service';

describe('DegreService', () => {
  let service: DegreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
