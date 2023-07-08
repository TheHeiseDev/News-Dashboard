import { useSelector } from "react-redux";
import { selectAuth } from "../store/slice/auth/authSlice";

export const useAuth = () => {
  const { user } = useSelector(selectAuth);

  return {
    isAuth: !!user?.email,
    email: user?.email,
    token: user?.token,
    id: user?.id,
    role: user?.role,
  };
};
