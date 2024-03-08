// category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all/category`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create/category`, category);
  }

  updateCategory(categoryId: number, category: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/categoryU/${categoryId}`, category);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categoryD/${categoryId}`);
  }
}
