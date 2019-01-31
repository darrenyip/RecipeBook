import { Recipe } from './recipe.model'
export class RecipeService{
    recipes: Recipe[] = [
        new Recipe('A test recipe','this is test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chocolate-fudge-cake.jpg')

    ];

    getRecipes(){
        return this.recipes.slice();
    }
}
