import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Categories from '../screens/Categories';
import CategoryRecipes from '../screens/CategoryRecipes';
import Recipe from '../screens/Recipe';

const RecipesNavigator = createStackNavigator({
  Categories: {
    screen: Categories
  },

  CategoryRecipes: {
    screen: CategoryRecipes
  },

  Recipe: {
    screen: Recipe
  }
});

export default createAppContainer(RecipesNavigator);
