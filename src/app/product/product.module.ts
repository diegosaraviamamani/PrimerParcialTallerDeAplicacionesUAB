import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent, ProductDetailsComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
