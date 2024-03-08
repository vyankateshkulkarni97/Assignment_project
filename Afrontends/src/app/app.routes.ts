import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component.spec';
import { ProductComponent } from './product.component.spec';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'categories', component: CategoryComponent },
  { path: 'products', component: ProductComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
