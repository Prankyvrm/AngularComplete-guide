import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  @Output() selectedLinkClicked = new EventEmitter<string>();

  recipeClicked() {
    this.selectedLinkClicked.emit('recipe');
  }
  shoppingListClicked() {
    this.selectedLinkClicked.emit('shoppingList');

  }
}
