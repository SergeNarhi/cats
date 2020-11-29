import { createAction, props } from '@ngrx/store';

export const load = createAction('[Cat] Load');

export const loadSuccess = createAction('[Cat] Load Success', props<{ data: any }>());

export const save = createAction('[Cat] Save', props<{ data: any }>());

export const remove = createAction('[Cat] Remove', props<{ data: any }>());

export const like = createAction('[Cat] Like', props<{ data: any }>());

export const unlike = createAction('[Cat] Unlike', props<{ data: any }>());
