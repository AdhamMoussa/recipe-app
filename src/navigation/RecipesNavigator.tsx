import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import Recipe from "../screens/Recipe";

import { defaultTheme } from "../utils/theme";

const RecipesNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories
    },

    CategoryRecipes: {
      screen: CategoryRecipes
    },

    Recipe: {
      screen: Recipe
    }
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: defaultTheme.colors.main
      },
      headerTintColor: defaultTheme.colors.white
    }
  }
);

export default createAppContainer(RecipesNavigator);
