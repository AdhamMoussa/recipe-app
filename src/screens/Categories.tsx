import React from "react";
import { View, FlatList } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoryListItem from "../components/CategoryListItem";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { CATEGORIES } from "../data/dummy-data";

const Categories: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  const itemPressHandler = (categoryId: string): void => {
    navigation.navigate({
      routeName: "CategoryRecipes",
      params: { categoryId }
    });
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <CategoryListItem item={item} onPress={itemPressHandler} />
        )}
      />
    </View>
  );
};

Categories.navigationOptions = navProps => ({
  headerTitle: "Categories",
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

export default Categories;
