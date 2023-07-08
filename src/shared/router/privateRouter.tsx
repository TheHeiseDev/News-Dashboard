import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRouter = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
};
