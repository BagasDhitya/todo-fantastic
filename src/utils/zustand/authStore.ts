import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthState } from "../../utils/types/auth";

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  username: null,
  email: null,
  password: null,
  login: async (email: string | null, password: string | null) => {
    await AsyncStorage.setItem("email", email || "");
    set({ isLoggedIn: true, email, password });
  },
  logout: async () => {
    await AsyncStorage.removeItem("email");
    set({ isLoggedIn: false, email: null });
  },
}));
