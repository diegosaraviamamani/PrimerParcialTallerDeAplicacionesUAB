import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { IsNotAuthenticatedGuard } from 'src/guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
