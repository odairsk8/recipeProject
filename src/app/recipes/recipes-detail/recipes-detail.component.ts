import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from 'app/recipes/recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
