import { useFonts } from "expo-font";
import TabNavigation from "./src/routes/TavNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    YesevaOne: require("./assets/fonts/YesevaOne.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <TabNavigation />;
}
