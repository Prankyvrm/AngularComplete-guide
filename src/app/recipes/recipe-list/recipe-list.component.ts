import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Rasmalai", "A milk based Indian Sweet", "https://5.imimg.com/data5/BQ/LF/MY-24852937/rasmalai-sweet-500x500.jpg"),
    new Recipe("Kaju Katli", "A Cashew based Indian Sweet", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Kaju_katli_sweet.jpg/1200px-Kaju_katli_sweet.jpg"),
    new Recipe("Gulab Jamun", "A Khoya based Indian Sweet", "https://upload.wikimedia.org/wikipedia/commons/8/88/Gulaab_Jamun_%28homemade%21%29_bright.jpg"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
