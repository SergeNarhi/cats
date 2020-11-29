import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    loadChildren: () =>
      import('./features/cat/cat.module').then((m) => m.CatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
