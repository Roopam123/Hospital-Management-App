import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigation/TabNavigation";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    font: require("./assets/fonts/Outfit-Regular.ttf"),
    bold: require("./assets/fonts/Outfit-Bold.ttf"),
    semiBold: require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
