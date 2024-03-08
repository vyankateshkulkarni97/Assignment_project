// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all/products`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/product/add`, product);
  }

  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/productU/${productId}`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/productD/${productId}`);
  }
}
