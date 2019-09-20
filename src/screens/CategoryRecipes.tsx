import React from "react";
import { View, FlatList } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import RecipeItem from "../components/RecipeItem";

import { CATEGORIES, RECIPES } from "../data/dummy-data";
import { Recipe } from "../models/recipe";

const CategoryRecipes: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  const categoryId: string = navigation.getParam("categoryId");

  const recipes = RECIPES.filter(recipe =>
    recipe.categoryIds.includes(categoryId)
  );

  const navigateToRecipe = (recipe: Recipe): void => {
    navigation.navigate({
      routeName: "Recipe",
      params: { recipe }
    });
  };

  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <RecipeItem recipe={item} navigateToRecipe={navigateToRecipe} />
        )}
      />
    </View>
  );
};

CategoryRecipes.navigationOptions = navigationProps => {
  const categoryId = navigationProps.navigation.getParam("categoryId");

  const categoryData = CATEGORIES.find(item => item.id === categoryId);

  if (!categoryData) {
    throw new Error("category doesn't exist");
  }

  return {
    headerTitle: categoryData.title
  };
};

export default CategoryRecipes;
