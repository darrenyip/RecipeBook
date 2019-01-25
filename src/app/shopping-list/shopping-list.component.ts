import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/indredient.model'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Banana',4),
    new Ingredient('Pineapple',2),
  ];
  onIngredientAdded(ingredient:Ingredient){  
    this.ingredients.push(ingredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
