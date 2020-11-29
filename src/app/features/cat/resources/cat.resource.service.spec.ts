import { TestBed } from '@angular/core/testing';

import { Cat.ResourceService } from './cat.resource.service';

describe('Cat.ResourceService', () => {
  let service: Cat.ResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cat.ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
