import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Strawberry cake',
      'Strawberry cake description',
      'https://images-gmi-pmc.edge-generalmills.com/0ee62ef5-30c1-4bb3-97e1-82287551f0a5.jpg'
    ),
    new Recipe(
      'Berry ice cream',
      'Berry ice cream description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/27/0/WU0208H_blackberry-chip-ice-cream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1385070926674.jpeg'
    ),
    new Recipe(
      'Japanese sushi',
      'Japanese sushi description',
      'https://sovetnews.com/wp-content/uploads/2016/11/maxresdefault.jpg'
    ),
    new Recipe(
      'Italian pizza',
      'Italian pizza description',
      'https://s0.tchkcdn.com/g-IuEPc7pDtEUYXTjwANXr1A/13/174013/660x480/f/0/3c65e9e89c1426d2b558ee07d23de1f0_jeda_pishha_picca_vkusno_bolgarskij_pjerjec_chjesnok_1920x1170.jpg'
    ),
    new Recipe(
      'Chocolate cake',
      'Chocolate cake description',
      'https://du7ybees82p4m.cloudfront.net/56476cc2b7f254.58157922.jpg?width=910&height=512'
    ),
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
