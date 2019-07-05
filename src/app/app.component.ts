import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  showContent = { showRecipeBook: false, showShoppingList: true };
  
  onChoose(data:any){
    this.showContent=data;
  }

}
