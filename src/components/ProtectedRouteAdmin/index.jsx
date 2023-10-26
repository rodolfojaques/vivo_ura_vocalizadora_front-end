import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/user";

const ProtectedRoutesAdm = () => {
  const { usuario } = useContext(UserContext);

  return usuario.perfil?.toLowerCase() === "admin" ||
    usuario.perfil?.toLowerCase() === "useradm" ? (
    <Outlet />
  ) : (
    <Navigate to="/home" />
  );
};

export default ProtectedRoutesAdm;
