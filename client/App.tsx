import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootNavigation from "./src/routes/RootNavigation";
import AuthNavigation from "./src/routes/AuthNavigation";
import authStore from "./src/stores/auth-store";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    YesevaOne: require("./assets/fonts/YesevaOne.ttf"),
  });

  const [token, setToken] = useState(authStore.getState().token);

  useEffect(() => {
    const unsubscribe = authStore.subscribe(() => {
      setToken(authStore.getState().token);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {token ? <RootNavigation /> : <AuthNavigation />}
    </QueryClientProvider>
  );
}
