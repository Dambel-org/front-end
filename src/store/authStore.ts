import create from 'zustand';
import {
  devtools,
  persist,
} from 'zustand/middleware';

interface IToken {
  refresh: string;
  access: string;
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
