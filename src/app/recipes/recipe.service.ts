import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{

  recipeSelected: Subject<Recipe> = new Subject<Recipe>();
  recipesUpdated: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]):void {
    this.recipes = recipes;
    this.updateRecipesSubject();
  }

  getRecipe(id: number): Recipe | null {
    return this.recipes.slice().find(el => el.id === id);
  }

  createRecipe(name: string, desc: string, imagePath: string, ingredients: Ingredient[]): void {
    const newRecipeId = this.recipes.slice().pop().id + 1;
    this.recipes.push(new Recipe(newRecipeId, name, desc, imagePath, ingredients))
    this.updateRecipesSubject();
  }

  updateRecipe(recipe: Recipe): void {
    const recipeIndex = this.recipes.findIndex(r => r.id === recipe.id)
    this.recipes.splice(recipeIndex, 1, recipe)
    this.updateRecipesSubject();
  }

  private updateRecipesSubject(): void {
    this.recipesUpdated.next(this.recipes.slice())
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipes.splice(this.recipes.findIndex(r => r.id === recipe.id), 1)
    this.updateRecipesSubject();
  }
}
