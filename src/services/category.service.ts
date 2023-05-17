import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Product } from 'src/app/product/product.model';
import { Subject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string;
  private deletedProductSource = new Subject<void>();
  deletedProduct$ = this.deletedProductSource.asObservable();

  constructor(public http: HttpClient) {
    this.url = environment.baseUrl;
  }
  getAllProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.url}/products/${id}`);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.url}/products/${id}`).pipe(
      tap(() => {
        this.deletedProductSource.next();
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
