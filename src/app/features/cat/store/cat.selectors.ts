import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCat from './cat.reducer';
import { Cat } from '../interfaces/cat';

export const selectCatState = createFeatureSelector<fromCat.State>(
  fromCat.catFeatureKey
);

export const selectCats = createSelector(
  selectCatState,
  (state: fromCat.State): Cat[] => state.cats
);

export const selectCat = () =>
  createSelector(
    selectCatState,
    (state: fromCat.State, id: string | null): Cat =>
      state.cats.find((cat) => cat._id === id) as Cat
  );
