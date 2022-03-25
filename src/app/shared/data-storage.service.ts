import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map,tap} from 'rxjs/operators'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://recipes-app-54415-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe((res) => {
      //
    })
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://recipes-app-54415-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(
        map((recipes) => recipes.map(recipe => ({...recipe, ingredients: recipe.ingredients || []}))),
        tap((recipes) => this.recipesService.setRecipes(recipes))
      );
  }
}
