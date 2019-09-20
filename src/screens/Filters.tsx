import React from "react";
import { View, Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

const Filters: NavigationStackScreenComponent = props => {
  return (
    <View>
      <Text>Filters screen</Text>
    </View>
  );
};

Filters.navigationOptions = navProps => ({
  headerTitle: "Filters",
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

export default Filters;
