import React from "react";
import {
  HeaderButton,
  HeaderButtonProps
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { defaultTheme } from "../utils/theme";

const CustomHeaderButton: React.FC<HeaderButtonProps> = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={defaultTheme.colors.white}
    />
  );
};

export default CustomHeaderButton;
