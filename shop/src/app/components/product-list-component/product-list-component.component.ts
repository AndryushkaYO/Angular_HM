import { forwardRef, Component, OnInit } from '@angular/core';
import ProductsService from '../../services/products-service.service';
import {ProductModel} from  '../../models/product-model'; 
import {CartService} from '../../services/cart-service.service';
@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css','../../../bootstrap.min.css'],
  providers: [ProductsService,CartService]
})
export default class ProductListComponent implements OnInit {
  productsList:ProductModel[]
  service:CartService
  constructor(serv:ProductsService,serve:CartService) { 
    this.productsList = serv.getProducts();
    this.service = serve;
  }

  ngOnInit() {
  }
  /*onBuy(serv:CartService){
    console.log(`You've bought ${this.product.name}`);
    this.service.addToCart(this.product);
  }*/
}
