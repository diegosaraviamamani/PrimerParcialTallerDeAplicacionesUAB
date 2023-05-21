import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { IsNotAuthenticatedGuard } from 'src/guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}