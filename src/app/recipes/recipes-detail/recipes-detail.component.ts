import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from 'app/recipes/recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
              private activatedRoute: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.recipe = this.recipesService.getRecipe(this.id);
      });
  }

  onToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipeClick(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

}
