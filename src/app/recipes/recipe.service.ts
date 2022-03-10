import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  recipeSelected: Subject<Recipe> = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1,'Name', 'Desc', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Tomatoes', 2)]),
    new Recipe(2,'Name2', 'Desc2', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Potatos', 2)]),
    new Recipe(3,'Name3', 'Desc3', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Carrots', 2)]),
    new Recipe(4,'Name4', 'Desc4', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU", [new Ingredient('Tomatoes', 2)]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe | null {
    return this.recipes.slice().find(el => el.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
