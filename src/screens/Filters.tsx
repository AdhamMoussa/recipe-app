import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

import { defaultTheme } from "../utils/theme";

const Filters: NavigationStackScreenComponent = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const currentFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    };

    console.log(currentFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ saveFilters });
  }, [saveFilters]);

  return (
    <View>
      <Text style={styles.title}>Filters</Text>

      <View style={styles.filter}>
        <Text style={styles.filterLabel}>Gluten-free</Text>
        <Switch
          value={isGlutenFree}
          onValueChange={setIsGlutenFree}
          trackColor={{
            true: defaultTheme.colors.main,
            false: defaultTheme.colors.gray
          }}
          thumbColor={defaultTheme.colors.gray}
        />
      </View>

      <View style={styles.filter}>
        <Text style={styles.filterLabel}>Lactose-free</Text>
        <Switch
          value={isLactoseFree}
          onValueChange={setIsLactoseFree}
          trackColor={{
            true: defaultTheme.colors.main,
            false: defaultTheme.colors.gray
          }}
          thumbColor={defaultTheme.colors.gray}
        />
      </View>

      <View style={styles.filter}>
        <Text style={styles.filterLabel}>Vegan</Text>
        <Switch
          value={isVegan}
          onValueChange={setIsVegan}
          trackColor={{
            true: defaultTheme.colors.main,
            false: defaultTheme.colors.gray
          }}
          thumbColor={defaultTheme.colors.gray}
        />
      </View>

      <View style={styles.filter}>
        <Text style={styles.filterLabel}>Vegetarian</Text>
        <Switch
          value={isVegetarian}
          onValueChange={setIsVegetarian}
          trackColor={{
            true: defaultTheme.colors.main,
            false: defaultTheme.colors.gray
          }}
          thumbColor={defaultTheme.colors.gray}
        />
      </View>
    </View>
  );
};

Filters.navigationOptions = navProps => ({
  headerTitle: "Filters",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="md-menu"
        title="menu"
        onPress={() => {
          navProps.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="ios-save"
        title="save"
        onPress={navProps.navigation.getParam("saveFilters")}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  filterLabel: {
    fontSize: 18,
    marginRight: 10,
    width: "80%"
  }
});

export default Filters;
