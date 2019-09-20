import React from "react";
import { FlatList } from "react-native";

import RecipeItem from "./RecipeItem";

import { Recipe } from "../models/recipe";

interface IProps {
  recipes: Recipe[];
  navigateToRecipe: (recipe: Recipe) => void;
}

const RecipeList: React.FC<IProps> = props => {
  const { recipes, navigateToRecipe } = props;

  return (
    <FlatList
      data={recipes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <RecipeItem recipe={item} navigateToRecipe={navigateToRecipe} />
      )}
    />
  );
};

export default RecipeList;
