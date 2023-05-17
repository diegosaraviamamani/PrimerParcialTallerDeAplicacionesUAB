import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { IsNotAuthenticatedGuard } from 'src/guards/is-not-authenticated.guard';
import { IsAuthenticatedGuard } from 'src/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [IsAuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
