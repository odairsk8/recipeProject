import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe("Test recipe","description","http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg"),
    new Recipe("aaaaa","sssssss","http://idealwt.com/wp-content/uploads/2015/04/2ahi2c3.gif"),
    new Recipe("cxcxcxcxcx","bvbvbvbv","http://www.seriouseats.com/images/2016/12/20161226-staff-picks-best-recipes-2016-chicken-with-cabbage.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
