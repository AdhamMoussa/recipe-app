import React, { useState } from "react";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

import RecipesNavigator from "./src/navigation/RecipesNavigator";

import { loadFonts } from "./src/utils/loadFonts";
import { defaultTheme } from "./src/utils/theme";

useScreens();

const loadAssets = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    Promise.all([loadFonts])
      .then(() => resolve())
      .catch(() => reject());
  });
};

const App: React.FC = () => {
  const [isLoading, setLoadingState] = useState(true);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={() => setLoadingState(false)}
      />
    );
  }

  return <RecipesNavigator />;
};

export default App;
