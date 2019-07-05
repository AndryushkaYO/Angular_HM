import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onChoose = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  showContent(data: string) {
    data === 'RecipeBook' ? 
    this.onChoose.emit({ showRecipeBook: true, showShoppingList: false }) : 
    this.onChoose.emit({ showRecipeBook: false, showShoppingList: true });
  }
}
