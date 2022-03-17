import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from './recipe.service'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit, OnDestroy {

  activeRecipe: Recipe;
  private recipeChangeSub: Subscription;

  constructor(private recipeService: RecipeService) {
    this.recipeChangeSub = this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.activeRecipe = recipe)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.recipeChangeSub.unsubscribe();
  }
}
