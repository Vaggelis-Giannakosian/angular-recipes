import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  recipeSelected: Subject<Recipe> = new Subject<Recipe>();
  recipesUpdated: Subject<Recipe[]> = new Subject<Recipe[]>();

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

  createRecipe(name: string, desc: string, imagePath: string, ingredients: Ingredient[]):void
  {
    const newRecipeId = this.recipes.slice().pop().id + 1;
    this.recipes.push(new Recipe(newRecipeId,name,desc,imagePath,ingredients))
    this.updateRecipesSubject();
  }

  updateRecipe(recipe: Recipe):void
  {
    const recipeIndex = this.recipes.findIndex(r => r.id === recipe.id)
    this.recipes.splice(recipeIndex,1,recipe)
    this.updateRecipesSubject();
  }

  private updateRecipesSubject(): void
  {
    this.recipesUpdated.next(this.recipes.slice())
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
