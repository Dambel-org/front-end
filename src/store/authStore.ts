import create from 'zustand';
import {
  devtools,
  persist,
} from 'zustand/middleware';

type Role = 'Trainer' | 'Trainee' | 'GymOwner' | undefined;

interface IToken {
  refresh: string;
  access: string;
  role: Role;
}

interface IAuthState {
  token: IToken;
  setToken: (token: IToken) => void;
  clearToken: () => void;
}

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(
      (set, get) => ({
        token: {
          access: '',
          refresh: '',
          role: undefined,
        },

        setToken: (token: IToken) => {
          set({
            token,
          });
        },
        clearToken: () => {
          set({
            token: {
              access: '',
              refresh: '',
              role: undefined,
            },
          });
        },
      }),
      {
        name: 'DAMBEL-AUTH-STORE',
        getStorage: () => localStorage,
        serialize: (state) =>
          btoa(JSON.stringify(state)),
        deserialize: (state) =>
          JSON.parse(atob(state)),
        partialize: (state) => ({
          token: state.token,
        }),
      },
    ),
  ),
);
