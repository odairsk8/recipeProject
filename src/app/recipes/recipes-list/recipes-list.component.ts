import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from 'app/recipes/recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewClick() {
    this.router.navigate(['new'], { relativeTo: this.activatedRouter });
  }

}
