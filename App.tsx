import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";

import Categories from "./src/screens/Categories";

import { loadFont } from "./src/utils/loadFonts";

const App: React.FC = () => {
  const [isLoading, setLoadingState] = useState(true);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setLoadingState(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
