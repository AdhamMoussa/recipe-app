import React, { useState } from "react";
import { AppLoading } from "expo";

import RecipesNavigator from "./src/navigation/RecipesNavigator";

import { loadFonts } from "./src/utils/loadFonts";

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
