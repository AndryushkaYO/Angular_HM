import {Component, OnInit} from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingradients : Ingradient[] = [
    new Ingradient('Apple',10),
    new Ingradient('Banana',17),
    new Ingradient('Beer',1),
    new Ingradient('Sweet',19),
  ];

  constructor() {}

  ngOnInit() {}

  addNewIngradient(product:Ingradient) {
    this.ingradients.push(product);
  }
}
