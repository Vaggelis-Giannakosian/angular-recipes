import {EventEmitter, Injectable, Output} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Name', 'Desc', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Tomatoes', 2)]),
    new Recipe('Name2', 'Desc2', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Potatos', 2)]),
    new Recipe('Name3', 'Desc3', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Carrots', 2)]),
    new Recipe('Name4', 'Desc4', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Tomatoes', 2)]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
