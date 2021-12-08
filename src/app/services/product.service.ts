import { Injectable } from '@angular/core';
import { Catalogue } from '../shared/mock-data/catalagoue-produits.module';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
getProducts():Produit[]{
  return Catalogue;
}
  constructor() { }
}
