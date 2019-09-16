import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const Recipe: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>Recipe screen</Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

export default Recipe;
