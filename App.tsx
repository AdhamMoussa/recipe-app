import React, { useState } from "react";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

import MainNavigator from "./src/navigation";

import { loadFonts } from "./src/utils/loadFonts";

useScreens();

const loadAssets = (): Promise<void> => {
  return loadFonts();
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

  return <MainNavigator />;
};

export default App;
