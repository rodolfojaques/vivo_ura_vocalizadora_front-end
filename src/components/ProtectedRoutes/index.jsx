import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/user";

const ProtectedRoutes = () => {
  const { usuario } = useContext(UserContext);

  return usuario?.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
