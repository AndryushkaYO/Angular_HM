import { Component, OnInit, Input } from '@angular/core';
import {ProductModel} from '../../models/product-model';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css','../../../bootstrap.min.css']
})


export class ProductComponent implements OnInit {
  @Input() product:ProductModel
  
  constructor() { 
    
  }
  
  ngOnInit() {
  }
  
  
}
