import { Injectable, EventEmitter } from "@angular/core";

import { Ingredient } from "app/shared/ingrediente.model";

@Injectable()
export class ShoppingListService { 

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 3),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Bannas', 4)
      ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient ){
        this.ingredients.push(ingredient);
        this.emmitIngredientsChanged();
    }

    addIngredientRange(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.emmitIngredientsChanged();
    }

    emmitIngredientsChanged(){
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}