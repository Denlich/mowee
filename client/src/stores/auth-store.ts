import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

interface AuthState {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
}

const authStore = create<AuthState>((set) => ({
  token: "",
  setToken: async (token) => {
    await SecureStore.setItemAsync("token", token);
    set({ token });
  },
  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: "" });
  },
}));

export default authStore;
