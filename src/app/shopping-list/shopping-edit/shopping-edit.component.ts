import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {

  @Output() added: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
  }

  addClicked(nameValue:string, amountValue:string, event: Event):void
  {
    event.preventDefault();
    const amountNumber = parseInt(amountValue);
    this.added.emit(new Ingredient(nameValue,amountNumber));
  }

}
