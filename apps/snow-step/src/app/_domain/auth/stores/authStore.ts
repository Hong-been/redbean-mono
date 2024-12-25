import { create } from 'zustand';

interface AuthStore {
  accessToken: string | null;
  hasAttemptedRefresh: boolean;
  setAccessToken: (token: string | null) => void;
  setHasAttemptedRefresh: (value: boolean) => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  accessToken: null,
  hasAttemptedRefresh: false,
  setAccessToken: (token) => set({ accessToken: token }),
  setHasAttemptedRefresh: (value) => set({ hasAttemptedRefresh: value }),
  isAuthenticated: () => !!get().accessToken,
}));