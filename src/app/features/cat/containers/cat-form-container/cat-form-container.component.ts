import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../../interfaces/cat';
import { Store } from '@ngrx/store';
import * as fromCat from '../../store/cat.reducer';
import { selectCat } from '../../store/cat.selectors';
import { ActivatedRoute } from '@angular/router';
import * as CatActions from '../../store/cat.actions';

@Component({
  selector: 'app-cat-form-container',
  templateUrl: './cat-form-container.component.html',
  styleUrls: ['./cat-form-container.component.scss'],
})
export class CatFormContainerComponent {
  public cat$: Observable<Cat> | undefined;
  constructor(
    private readonly store: Store<fromCat.State>,
    private readonly route: ActivatedRoute
  ) {
    this.cat$ = this.store.select(
      selectCat(),
      this.route.snapshot.paramMap.get('id')
    );
  }

  save(catData: Partial<Cat>): void {
    this.store.dispatch(CatActions.save({ data: catData }));
  }

  remove(id: string): void {
    this.store.dispatch(CatActions.remove({ data: id }));
  }
}
