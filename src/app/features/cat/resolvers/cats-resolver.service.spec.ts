import { TestBed } from '@angular/core/testing';

import { CatsResolverService } from './cats-resolver.service';

describe('CatsResolverService', () => {
  let service: CatsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
