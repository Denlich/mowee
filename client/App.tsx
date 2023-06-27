import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootNavigation from "./src/routes/RootNavigation";
import AuthNavigation from "./src/routes/AuthNavigation";
import authStore from "./src/stores/auth-store";

const queryClient = new QueryClient();

export default function App() {
  const [token, setToken] = useState(authStore.getState().token);

  useEffect(() => {
    const unsubscribe = authStore.subscribe((state) => {
      setToken(state.token);
    });
    return () => unsubscribe();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    YesevaOne: require("./assets/fonts/YesevaOne.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {token ? <RootNavigation /> : <AuthNavigation />}
    </QueryClientProvider>
  );
}
