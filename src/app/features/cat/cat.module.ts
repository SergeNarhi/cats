import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatListContainerComponent } from './containers/cat-list-container/cat-list-container.component';
import { CatRoutingModule } from './cat-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { CatFormContainerComponent } from './containers/cat-form-container/cat-form-container.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { StoreModule } from '@ngrx/store';
import * as fromCat from './store/cat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatEffects } from './store/cat.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CatCardContainerComponent } from './containers/cat-card-container/cat-card-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    CatListComponent,
    CatListContainerComponent,
    CatFormComponent,
    CatFormContainerComponent,
    CatCardComponent,
    CatCardContainerComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CatRoutingModule,
    FlexLayoutModule,
    StoreModule.forFeature(fromCat.catFeatureKey, fromCat.reducer),
    EffectsModule.forFeature([CatEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
})
export class CatModule {}
