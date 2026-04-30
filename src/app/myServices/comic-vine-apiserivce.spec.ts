import { TestBed } from '@angular/core/testing';

import { ComicVineAPISerivce } from './comic-vine-apiserivce';

describe('ComicVineAPISerivce', () => {
  let service: ComicVineAPISerivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicVineAPISerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
