import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from 'src/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss', '../app.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    public categoryService: CategoryService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSelectCategory(id: number) {
    this.router.navigate(['/product'], { queryParams: { categoryId: id } });
  }
}
