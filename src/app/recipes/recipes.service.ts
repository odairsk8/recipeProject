import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingrediente.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Test recipe", "description",
            "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg",
            [
                new Ingredient("arroz", 1), new Ingredient("feijão", 2)
            ]),
        new Recipe(
            "Test recipe", "description",
            "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg",
            [
                new Ingredient("batata", 1), new Ingredient("ovo", 2)
            ]),
        new Recipe(
            "Test recipe", "description",
            "http://www.seriouseats.com/images/2016/12/20161226-staff-picks-best-recipes-2016-chicken-with-cabbage.jpg",
            [
                new Ingredient("couve", 1), new Ingredient("atum", 2)
            ])
    ];

    
    constructor(private shoppingListService: ShoppingListService) {
        
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[])
    {
        this.shoppingListService.addIngredientRange(ingredients);
    }

}