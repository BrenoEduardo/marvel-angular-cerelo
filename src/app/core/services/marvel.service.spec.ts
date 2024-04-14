import { TestBed } from '@angular/core/testing';

import { MarvelService } from './marvel.service';
import { HttpClientModule } from '@angular/common/http';

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
        service = TestBed.inject(MarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
