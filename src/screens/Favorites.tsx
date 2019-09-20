import React from "react";
import { View, FlatList } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import RecipeList from "../components/RecipeList";

import { RECIPES } from "../data/dummy-data";
import { Recipe } from "../models/recipe";

const Favorites: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  const navigateToRecipe = (recipe: Recipe): void => {
    navigation.navigate({
      routeName: "Recipe",
      params: { recipe }
    });
  };

  return <RecipeList recipes={RECIPES} navigateToRecipe={navigateToRecipe} />;
};

Favorites.navigationOptions = {
  headerTitle: "Favorite Recipes"
};

export default Favorites;
