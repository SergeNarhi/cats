import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../../interfaces/cat';
import { Store } from '@ngrx/store';
import * as fromCat from '../../store/cat.reducer';
import { selectCats } from '../../store/cat.selectors';
import * as CatActions from '../../store/cat.actions';

@Component({
  selector: 'app-cat-list-container',
  templateUrl: './cat-list-container.component.html',
  styleUrls: ['./cat-list-container.component.scss'],
})
export class CatListContainerComponent {
  public cats$: Observable<Cat[]> | undefined;
  constructor(private readonly store: Store<fromCat.State>) {
    this.cats$ = this.store.select(selectCats);
  }

  like(id: string): void {
    this.store.dispatch(CatActions.like({ data: id }));
  }

  unlike(id: string): void {
    this.store.dispatch(CatActions.unlike({ data: id }));
  }
}
