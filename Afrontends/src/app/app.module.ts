import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CategoryComponent } from './category/category.component.spec';
import { ProductComponent } from './product.component.spec';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [

    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
