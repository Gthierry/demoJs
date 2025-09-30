import { TestBed } from '@angular/core/testing';

import { ChuckJokeService } from './chuck-joke-service';

describe('ChuckJokeService', () => {
  let service: ChuckJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
