import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Product } from 'src/app/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.baseUrl;
  }
  getAllProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }
}
