import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A Paw Bhaji',
      'This is a Paw Bhaji',
      'https://media.istockphoto.com/photos/diet-menu-healthy-salad-with-avocado-blue-cheese-and-smoked-shrimps-picture-id1327296310?s=612x612',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2020/07/08/04/07/sea-5382487_960_720.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(recipeId: number): Recipe | undefined {
    const recipeCopy = this.recipes.slice();
    return recipeCopy.find((recipe: Recipe) => recipe.id === recipeId);
  }
}
