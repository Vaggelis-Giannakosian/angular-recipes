import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {

  @Output() added: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>

  ngOnInit(): void {
  }

  addClicked(event: Event):void
  {
    event.preventDefault();
    const amountNumber = parseInt(this.amountInput.nativeElement.value);
    this.added.emit(new Ingredient(this.nameInput.nativeElement.value,amountNumber));
  }

}
