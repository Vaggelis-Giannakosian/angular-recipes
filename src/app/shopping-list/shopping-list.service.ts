import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService{

  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>()
  ingredientEditing: Subject<number> = new Subject<number>()

  private ingredients: Ingredient[]  = [
    new Ingredient('Apples',2),
    new Ingredient('Tomatoes',10),
  ];

  getIngredients(): Ingredient[]
  {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient
  {
    return this.ingredients.slice()[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number, ingredient: Ingredient){
    this.ingredients[index] = ingredient
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number){
    if(this.ingredients[index]){
      this.ingredients.splice(index,1)
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
