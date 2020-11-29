import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatListContainerComponent } from './containers/cat-list-container/cat-list-container.component';
import { CatFormContainerComponent } from './containers/cat-form-container/cat-form-container.component';
import { CatsResolverService } from './resolvers/cats-resolver.service';
import { CatCardContainerComponent } from './containers/cat-card-container/cat-card-container.component';

const routes: Routes = [
  {
    path: '',
    component: CatListContainerComponent,
    resolve: [CatsResolverService],
  },
  {
    path: 'new',
    component: CatFormContainerComponent,
    resolve: [CatsResolverService],
  },
  {
    path: ':id',
    component: CatCardContainerComponent,
    resolve: [CatsResolverService],
  },
  {
    path: ':id/edit',
    component: CatFormContainerComponent,
    resolve: [CatsResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatRoutingModule {}
