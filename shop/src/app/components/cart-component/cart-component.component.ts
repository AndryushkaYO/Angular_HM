import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/product-model';
import {CartService} from '../../services/cart-service.service';
@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css'],
  providers:[CartService]
})
export class CartComponent implements OnInit {
  productsList:ProductModel[]
  service:CartService
  constructor(serv:CartService) { 
    this.service = serv;
  }
  getProductsList(){
    this.productsList = this.service.getProductsList();
  }
  ngOnInit() {
  }

}
