// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product/product.Component';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(productName: string, categoryId: number) {
    this.productService.addProduct({ productName, categoryId }).subscribe(() => {
      this.loadProducts();
    });
  }

  updateProduct(productId: number, productName: string, categoryId: number) {
    this.productService.updateProduct(productId, { productName, categoryId }).subscribe(() => {
      this.loadProducts();
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.loadProducts();
    });
  }
}
