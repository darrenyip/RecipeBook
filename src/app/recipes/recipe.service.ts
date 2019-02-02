import { Recipe } from './recipe.model'

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/indredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A test recipe','this is test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chocolate-fudge-cake.jpg',[
            new Ingredient('Meat', 2),
            new Ingredient('Egg', 2)
        ]),
        new Recipe('A test recipe','this is test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chocolate-fudge-cake.jpg',[
            new Ingredient('Fish',3)
        ])
    ];
    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
