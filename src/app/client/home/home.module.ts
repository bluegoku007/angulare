import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeProductDetailComponent,
    HomeProductsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
