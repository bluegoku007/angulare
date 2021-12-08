import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Catalogue } from 'src/app/shared/mock-data/catalagoue-produits.module';
import { Produit } from 'src/app/shared/models/produit';
@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  produits=Catalogue;
  ch:Produit;
  title="Produits";
  onaffiche =(o:Produit): void =>{
    this.ch=o;
    }
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
     this.produits = this.productService.getProducts();
  }
  photo:string;
  type:string;
  price:string;
  details(prod)
  {
    this.photo=prod.image;
    this.type=prod.description;
    this.price=prod.prix;
  }
}
