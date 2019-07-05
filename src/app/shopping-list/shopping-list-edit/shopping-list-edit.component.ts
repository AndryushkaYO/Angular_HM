import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') productName : ElementRef;
  @ViewChild('amountInput') productAmount : ElementRef;
  @Output() product = new EventEmitter<Ingradient>();

  constructor() {}

  ngOnInit() {}

  addProduct() {
   this.product.emit(new Ingradient(this.productName.nativeElement.value,this.productAmount.nativeElement.value));
  }
}
