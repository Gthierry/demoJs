import { TestBed } from '@angular/core/testing';

import { Openfood } from './openfood';

describe('Openfood', () => {
  let service: Openfood;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Openfood);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
