import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{

  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[]  = [
    new Ingredient('Apples',2),
    new Ingredient('Tomatoes',10),
  ];

  getIngredients(): Ingredient[]
  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
