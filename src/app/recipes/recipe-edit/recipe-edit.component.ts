import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  editMode: Boolean = false;
  recipeForm: FormGroup

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  private initForm(recipe: Recipe | null){

    const ingredients = recipe?.ingredients;
    let ingredientsArray = new FormArray([]);

    if(ingredients && ingredients?.length){
      ingredients.forEach((ingredient: Ingredient) => {
        ingredientsArray.push(RecipeEditComponent.newIngredientFormGroup(ingredient))
      })
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe?.name, Validators.required),
      'imagePath': new FormControl(recipe?.imagePath,Validators.required),
      'description': new FormControl(recipe?.description, Validators.required),
      'ingredients' : ingredientsArray
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
      this.editMode = !!this.recipe
      this.initForm(this.recipe)
    })
  }

  onSubmit() {

    const {name, description, imagePath} = this.recipeForm.value;
    const ingredientsTsArray = (this.recipeForm.get('ingredients') as FormArray).getRawValue()

    if (this.editMode) {
      const recipe = new Recipe(this.recipe.id, name, description, imagePath, ingredientsTsArray)
      this.recipeService.updateRecipe(recipe)
    } else {
      this.recipeService.createRecipe(name, description, imagePath, ingredientsTsArray)
    }

    this.goBack()
  }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  get ingredientsValid(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls.filter(control => !control.valid).length === 0;
  }

  onRemoveIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).controls.push(RecipeEditComponent.newIngredientFormGroup(null))
  }

  onCancel() {
    this.recipeForm.reset();
    this.editMode = false;
    this.recipe = null;
    this.goBack();
  }

  goBack(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private static newIngredientFormGroup(ingredient: Ingredient | null) {
    return new FormGroup({
      name: new FormControl(ingredient?.name,Validators.required),
      amount: new FormControl(ingredient?.amount,[Validators.required,Validators.pattern('^[1-9]+[0-9]*$')]),
    })
  }
}
