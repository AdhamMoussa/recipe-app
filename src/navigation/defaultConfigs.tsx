import { NavigationStackOptions } from "react-navigation-stack";

import { defaultTheme } from "../utils/theme";

export const defaultStackOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: defaultTheme.colors.main
  },
  headerTintColor: defaultTheme.colors.white
};
