import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, MatCardModule, MatButtonModule],
  exports: [ProductComponent],
})
export class ProductModule {}
