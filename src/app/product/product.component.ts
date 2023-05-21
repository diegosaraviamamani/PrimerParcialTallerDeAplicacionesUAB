import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from './product.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', '../app.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  categoryName: string = '';

  constructor(
    public productService: ProductService,
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listProducts();
    this.productService.deletedProduct$.subscribe(() => {
      this.listProducts();
    });
    this.route.queryParamMap.subscribe((params) => {
      const productId = params.get('productId');
      const categoryId = params.get('categoryId');
      if (productId) {
        this.productService.getProductById(productId).subscribe((product) => {
          const dialogConfig: MatDialogConfig = { data: product };
          const dialogRef = this.dialog.open(
            ProductDetailsComponent,
            dialogConfig
          );
          dialogRef.afterClosed().subscribe(() => {
            const queryParams = { ...this.route.snapshot.queryParams };
            delete queryParams['productId'];
            this.router.navigate(['/product'], { queryParams });
          });
        });
      }
      if (categoryId) {
        this.categoryService.getCategoryById(categoryId).subscribe((cat) => {
          this.categoryName = cat.name;
        });
        this.productService
          .getProductsByCategoryId(categoryId)
          .subscribe((products) => {
            this.products = products;
          });
      } else {
        this.listProducts();
      }
    });
  }

  listProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onSelectProduct(id: number) {
    this.router.navigate(['/product'], {
      queryParams: { productId: id, ...this.route.snapshot.queryParams },
    });
  }

  removeCategoryFilter() {
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams['categoryId'];
    this.router.navigate(['/product'], { queryParams });
    this.categoryName = '';
  }
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  delete = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    public productService: ProductService
  ) {}

  confirmDelete() {
    this.delete = true;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id.toString()).subscribe();
  }
}
