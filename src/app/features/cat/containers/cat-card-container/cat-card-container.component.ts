import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../../interfaces/cat';
import { Store } from '@ngrx/store';
import * as fromCat from '../../store/cat.reducer';
import { ActivatedRoute } from '@angular/router';
import { selectCat } from '../../store/cat.selectors';
import * as CatActions from '../../store/cat.actions';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cat-card-container',
  templateUrl: './cat-card-container.component.html',
  styleUrls: ['./cat-card-container.component.scss'],
})
export class CatCardContainerComponent {
  public cat$: Observable<Cat> | undefined;
  constructor(
    private readonly store: Store<fromCat.State>,
    private readonly route: ActivatedRoute,
    public readonly dialog: MatDialog
  ) {
    this.cat$ = this.store.select(
      selectCat(),
      this.route.snapshot.paramMap.get('id')
    );
  }

  like(id: string): void {
    this.store.dispatch(CatActions.like({ data: id }));
  }

  unlike(id: string): void {
    this.store.dispatch(CatActions.unlike({ data: id }));
  }

  remove(id: string | undefined): void {
    if (id) {
      this.dialog
        .open(ConfirmDialogComponent, {width: '200px'})
        .afterClosed()
        .subscribe((confirm) => {
          if (confirm) {
            this.store.dispatch(CatActions.remove({data: id}));
          }
        });
    }
  }
}
