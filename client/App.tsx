import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootNavigation from "./src/routes/RootNavigation";
import AuthNavigation from "./src/routes/AuthNavigation";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    YesevaOne: require("./assets/fonts/YesevaOne.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <RootNavigation /> */}
      <AuthNavigation />
    </QueryClientProvider>
  );
}
