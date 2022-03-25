import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "./recipe.model";
import {Observable} from "rxjs";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]>{
  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const loadedRecipes = this.recipesService.getRecipes();
    if(loadedRecipes.length) return loadedRecipes;

    return this.dataStorageService.fetchRecipes();
  }

}
