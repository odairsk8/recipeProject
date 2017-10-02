import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/shared/ingrediente.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 2),
    new Ingredient('Bannas', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient )
  {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }

}
