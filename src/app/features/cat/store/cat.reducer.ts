import { createReducer, on } from '@ngrx/store';
import * as CatActions from './cat.actions';
import { Cat } from '../interfaces/cat';

export const catFeatureKey = 'cat';

export interface State {
  cats: Cat[];
  loading: boolean;
}

export const initialState: State = { cats: [], loading: false };

export const reducer = createReducer(
  initialState,

  on(CatActions.load, (state) => ({ ...state, loading: true })),
  on(CatActions.loadSuccess, (state, action) => ({
    ...state,
    cats: action.data,
    loading: false,
  })),
  on(CatActions.save, (state, action) => ({
    ...state,
    cats: action.data._id
      ? state.cats.map((cat) =>
          cat._id === action.data._id ? { ...action.data } : cat
        )
      : [
          ...state.cats,
          {
            ...action.data,
            _id: '' + (Math.max(...state.cats.map((c) => +c._id)) + 1),
          },
        ],
  })),
  on(CatActions.remove, (state, action) => ({
    ...state,
    cats: state.cats.filter((cat) => cat._id !== action.data),
  })),
  on(CatActions.like, (state, action) => ({
    ...state,
    cats: state.cats.map((cat) =>
      cat._id === action.data ? { ...cat, like: 1 } : cat
    ),
  })),
  on(CatActions.unlike, (state, action) => ({
    ...state,
    cats: state.cats.map((cat) =>
      cat._id === action.data ? { ...cat, like: 0 } : cat
    ),
  }))
);
