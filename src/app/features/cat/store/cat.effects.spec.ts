import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CatEffects } from './cat.effects';

describe('CatEffects', () => {
  let actions$: Observable<any>;
  let effects: CatEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CatEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
