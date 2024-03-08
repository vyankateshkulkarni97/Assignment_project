// category.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.Component';

@Component({
  selector: 'app-category',
  templateUrl: './category.html',

})
export class CategoryComponent implements OnInit {
  CategoryService: string | undefined; 
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addCategory(categoryName: string) {
    this.categoryService.addCategory({ categoryName }).subscribe(() => {
      this.loadCategories();
    });
  }

  updateCategory(categoryId: number, categoryName: string) {
    this.categoryService.updateCategory(categoryId, { categoryName }).subscribe(() => {
      this.loadCategories();
    });
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(() => {
      this.loadCategories();
    });
  }
}
