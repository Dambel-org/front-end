import { postAuthLogin } from "api";
import { FA_IR_ERROR } from "language";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
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
      toast.success(FA_IR_ERROR.LoginSuccess);
    },
    onError: (error) => {
      toast.error(FA_IR_ERROR.LoginFailed);
    }
  });
}