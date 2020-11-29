import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { load } from '../store/cat.actions';
import { Store } from '@ngrx/store';
import * as fromCat from '../store/cat.reducer';
import { selectCats } from '../store/cat.selectors';

@Injectable({
  providedIn: 'root',
})
export class CatsResolverService implements Resolve<any> {
  constructor(private readonly store: Store<fromCat.State>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.store.select(selectCats).subscribe((cats) => {
      if (!(cats && cats.length)) {
        this.store.dispatch(load());
      }
    });
  }
}
