import {EventEmitter, Injectable, Output} from "@angular/core";
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Name','Desc',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
    new Recipe('Name2','Desc2',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
    new Recipe('Name3','Desc3',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
    new Recipe('Name4','Desc4',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQiTum4APhqpBdXiEe2HsaRnw0OGXcPQjsA&usqp=CAU"),
  ];


  getRecipes(): Recipe[]
  {
    return this.recipes.slice();
  }
}
