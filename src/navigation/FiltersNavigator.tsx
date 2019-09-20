import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Filters from "../screens/Filters";

import { defaultStackOptions } from "./defaultConfigs";

const FiltersStackNavigator = createStackNavigator(
  {
    Filters: {
      screen: Filters
    }
  },
  {
    defaultNavigationOptions: {
      ...defaultStackOptions
    }
  }
);

export { FiltersStackNavigator };
