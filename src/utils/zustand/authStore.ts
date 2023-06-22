import {create} from 'zustand';

import {AuthState} from "../../utils/types/auth"

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  username: null,
  email: null,
  password: null,
  login: (email: string | null, password: string | null) => set({ isLoggedIn: true, email, password }),
  logout: () => set({ isLoggedIn: false, email: null }),
}));


