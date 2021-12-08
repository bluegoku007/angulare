import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    GestprodComponent,
    ProductaddComponent
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    GestprodComponent
  ]
})
export class GestprodModule { }
