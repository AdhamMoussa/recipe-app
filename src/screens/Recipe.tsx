import React from "react";
import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

import { Recipe } from "../models/recipe";
import { FlatList } from "react-native-gesture-handler";

const RecipeScreen: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  const recipe: Recipe = navigation.getParam("recipe");

  return (
    <ScrollView>
      <Image
        source={{ uri: recipe.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <Text>Duration: {recipe.duration}</Text>
        <Text>Level: {recipe.complexity}</Text>
        <Text>Cost: {recipe.affordability}</Text>
      </View>

      <View>
        <Text>Ingredients:</Text>
        <FlatList
          data={recipe.ingredients}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View>
        <Text>Steps:</Text>
        <FlatList
          data={recipe.steps}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
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

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  }
});

export default RecipeScreen;
