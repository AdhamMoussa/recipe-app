import React from "react";
import { View, FlatList } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import RecipeList from "../components/RecipeList";
import CustomHeaderButton from "../components/CustomHeaderButton";

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

Favorites.navigationOptions = navProps => ({
  headerTitle: "Favorite Recipes",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="md-menu"
        title="drawer icon"
        onPress={() => {
          navProps.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  )
});

export default Favorites;
