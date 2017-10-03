import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'app/app-routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './Recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './Recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from './Recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { DropdownDirective } from 'app/shared/dropdown.directive';

import { RecipesService } from 'app/recipes/recipes.service';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
