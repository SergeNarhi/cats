import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';

import * as CatActions from './cat.actions';
import { CatService } from '../services/cat.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class CatEffects {
  loadCats$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatActions.load),
      concatMap(() =>
        this.catService
          .loadCats()
          .pipe(map((data) => CatActions.loadSuccess({ data })))
      )
    );
  });

  saveCat$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CatActions.save),
        tap(() => this.snackBar.open('Cat saved', 'Close', { duration: 3000 })),
        tap((action) => this.router.navigate(['/cats']))
      );
    },
    { dispatch: false }
  );

  removeCat$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CatActions.remove),
        tap(() => this.snackBar.open('Cat removed', 'Close', { duration: 3000 })),
        tap(() => this.router.navigate(['/cats']))
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly catService: CatService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) {}
}
