import React from "react";
import { Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

import { Recipe } from "../models/recipe";

const RecipeScreen: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  const recipe: Recipe = navigation.getParam("recipe");

  return <Text>{recipe.title}</Text>;
};

RecipeScreen.navigationOptions = navigationProps => {
  const recipe: Recipe = navigationProps.navigation.getParam("recipe");

  return {
    headerTitle: recipe.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Fav" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    )
  };
};

export default RecipeScreen;
