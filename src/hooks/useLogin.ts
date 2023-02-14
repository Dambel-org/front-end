import { postAuthLogin } from "api";
import { useMutation } from "react-query";
import { useAuthStore } from "store";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);
  return useMutation(['login'], postAuthLogin, {
    onSuccess: (data) => {
      setToken({
        access: data.access,
        refresh: data.refresh,
        role: data.role,
      });
    },
  });
}