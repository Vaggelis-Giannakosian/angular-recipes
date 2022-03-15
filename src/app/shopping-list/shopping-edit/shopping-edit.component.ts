import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') ingredientForm: NgForm;
  ingredientEditSubscription: Subscription;
  editMode = false;
  ingredientEditingIndex: number;

  constructor(private shoppingListService: ShoppingListService) {  }

  ngOnDestroy(): void {
        this.ingredientEditSubscription.unsubscribe();
    }

  ngOnInit(): void {
    this.ingredientEditSubscription = this.shoppingListService.ingredientEditing.subscribe((index: number)=>{
      this.editMode = true;
      this.ingredientEditingIndex = index;
      const ingredient = this.shoppingListService.getIngredient(index)

      if(ingredient){
        const {name,amount} = ingredient
        this.ingredientForm.setValue({name,amount})
      }
    })
  }

  onSubmit(){
    if(!this.ingredientForm.valid) return;

    const {name, amount} = this.ingredientForm.value
    const ingredient = new Ingredient(name,amount)

    this.editMode
      ?  this.shoppingListService.updateIngredient(this.ingredientEditingIndex,ingredient)
      :  this.shoppingListService.addIngredient(ingredient);

    this.resetForm()
  }

  onDelete(){
    this.shoppingListService.removeIngredient(this.ingredientEditingIndex)
    this.resetForm()
  }

  resetForm(){
    this.ingredientForm.reset();
    this.ingredientEditingIndex = null;
    this.editMode = false;
  }

}
