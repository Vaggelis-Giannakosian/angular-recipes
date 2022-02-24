import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>

  constructor(private shoppingListService: ShoppingListService) {  }

  ngOnInit(): void {
  }

  addClicked(event: Event):void
  {
    event.preventDefault();
    const amountNumber = parseInt(this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,amountNumber));
    this.amountInput.nativeElement.value = '';
    this.nameInput.nativeElement.value  = '';
  }

}
