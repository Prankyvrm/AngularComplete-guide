import { Component, OnInit } from '@angular/core';
import { Intgredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Intgredient[] = [
    new Intgredient("Milk", 1),
    new Intgredient("Sugar", 2),
  ]
  constructor() { }

  ngOnInit() {
  }

  onAddClick(ingredient:Intgredient){
    this.ingredients.push(ingredient);
  }

}
