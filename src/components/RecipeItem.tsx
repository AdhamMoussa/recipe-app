import React from "react";
import {
  View,
  TouchableNativeFeedback,
  Text,
  ImageBackground,
  StyleSheet
} from "react-native";

import { Recipe } from "../models/recipe";

import { defaultTheme } from "../utils/theme";

interface IProps {
  recipe: Recipe;
  navigateToRecipe: (recipe: Recipe) => void;
}

const RecipeItem: React.FC<IProps> = props => {
  const { recipe, navigateToRecipe } = props;

  return (
    <TouchableNativeFeedback onPress={() => navigateToRecipe(recipe)}>
      <View style={styles.recipeItem}>
        <View style={{ ...styles.row, ...styles.recipeHead }}>
          <ImageBackground
            style={styles.recipeImg}
            source={{ uri: recipe.imageUrl }}
            resizeMode="cover"
          >
            <Text style={styles.recipeTitle} numberOfLines={1}>
              {recipe.title}
            </Text>
          </ImageBackground>
        </View>

        <View style={{ ...styles.row, ...styles.recipeDetails }}>
          <Text>{recipe.duration}M</Text>
          <Text>{recipe.complexity.toUpperCase()}</Text>
          <Text>{recipe.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  recipeItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    marginBottom: 20,
    elevation: 3
  },
  row: {
    flexDirection: "row"
  },
  recipeHead: {
    height: "80%"
  },
  recipeImg: {
    width: "100%",
    height: "100%"
  },
  recipeTitle: {
    fontFamily: "rainbows",
    fontSize: 18,
    fontWeight: "bold",
    color: defaultTheme.colors.white,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  recipeDetails: {
    height: "20%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  }
});

export default RecipeItem;
