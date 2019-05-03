import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product-model'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsList:ProductModel[] = [];
  constructor() { }
  addToCart(item:ProductModel){
    this.productsList.push(item);
  }
  getProductsList(){
    return this.productsList;
  }
}
