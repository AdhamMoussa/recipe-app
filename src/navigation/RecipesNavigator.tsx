import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import Favorites from "../screens/Favorites";
import Recipe from "../screens/Recipe";

import { defaultTheme } from "../utils/theme";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: defaultTheme.colors.main
  },
  headerTintColor: defaultTheme.colors.white
};

const RecipesStackNavigator = createStackNavigator(
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
      ...defaultStackOptions
    }
  }
);

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: {
      screen: Favorites
    },
    Recipe: {
      screen: Recipe
    }
  },
  {
    defaultNavigationOptions: {
      ...defaultStackOptions
    }
  }
);

const HomeTabsNavigator = createMaterialBottomTabNavigator(
  {
    Recipes: {
      screen: RecipesStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-restaurant" size={28} color={tabInfo.tintColor} />
        )
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-star" size={28} color={tabInfo.tintColor} />
        )
      }
    }
  },
  {
    activeColor: defaultTheme.colors.secondary,
    inactiveColor: "#aaa",
    barStyle: {
      backgroundColor: "#fff"
    }
  }
);

export default createAppContainer(HomeTabsNavigator);
