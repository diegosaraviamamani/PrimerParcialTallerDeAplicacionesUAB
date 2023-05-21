import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Category } from 'src/app/category/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string;

  constructor(public http: HttpClient) {
    this.url = environment.baseUrl;
  }
  getAllCategories() {
    return this.http.get<Category[]>(`${this.url}/categories`);
  }

  getCategoryById(id: string) {
    return this.http.get<Category>(`${this.url}/categories/${id}`);
  }
}
