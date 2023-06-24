import { useFonts } from "expo-font";
import RootNavigation from "./src/routes/RootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    YesevaOne: require("./assets/fonts/YesevaOne.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigation />;
}
