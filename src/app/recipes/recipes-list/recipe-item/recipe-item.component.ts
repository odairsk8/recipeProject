import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

import { Recipe } from 'app/recipes/recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
