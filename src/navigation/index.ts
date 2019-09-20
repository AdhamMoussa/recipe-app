import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import { HomeTabsNavigator } from "./HomeNavigator";
import { FiltersStackNavigator } from "./FiltersNavigator";

import { defaultTheme } from "../utils/theme";

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeTabsNavigator,
      navigationOptions: {
        drawerLabel: "Home"
      }
    },
    Filters: {
      screen: FiltersStackNavigator,
      navigationOptions: {
        drawerLabel: "Filters"
      }
    }
  },

  {
    contentOptions: {
      activeTintColor: defaultTheme.colors.secondary,
      labelStyle: {
        fontFamily: "rainbows"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
