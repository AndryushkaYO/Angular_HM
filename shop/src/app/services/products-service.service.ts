import {ProductModel} from '../models/product-model'
import { Category } from '../enums';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ProductsService {
   productsList:ProductModel[] = [new ProductModel('StrawberryPocky', 'Japan Sweets', 100, Category.Sweet, true),
              new ProductModel('Attack on Titan', 'Japanese Manga', 200, Category.Book, true),
              new ProductModel('Teddy', 'Bear', 300, Category.Toy, true)];
  constructor() { 
    //this.productsList =  products;
  }
  getProducts(){
    return this.productsList;
  }
}
