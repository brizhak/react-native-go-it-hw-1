import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Components/Navigator";
import "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
