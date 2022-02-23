import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]  = [
    new Ingredient('Apples',2),
    new Ingredient('Tomatoes',10),
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onIngredientAdded(ingredient: Ingredient):void{
    this.ingredients.push(ingredient);
  }

}
