import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";

const CategoryRecipes: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>Category Recipes screen</Text>
      <Button
        title="go to recipe"
        onPress={() => {
          navigation.navigate({
            routeName: "Recipe"
          });
        }}
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
