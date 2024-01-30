import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/index.jsx";
import PageAdmin from "../pages/admin/index.jsx";
import ListaDeAlarmes from "../pages/listaDeAlarmes/index.jsx";
import PaginaUsuarios from "../pages/usuarios/index.jsx";
import GruposDeAtuacao from "../pages/gruposDeAtuacao/index.jsx";
import Associacao from "../pages/associacao/index.jsx";
import GruposDeAlarmes from "../pages/gruposDeAlarmes/index.jsx";
import ProtectedRoutes from "../components/ProtectedRoutes/index.jsx";
import ListaDeAlarmesTems from "../pages/listaDeAlarmesTems/index.jsx";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<PageAdmin />} />
        <Route path="/lista-alarmes" element={<ListaDeAlarmes />} />
        <Route path="/lista-alarmes-tems" element={<ListaDeAlarmesTems />} />
        <Route path="/grupos-atuacao" element={<GruposDeAtuacao />} />
        <Route path="/associacao" element={<Associacao />} />
        <Route path="/grupos-alarmes" element={<GruposDeAlarmes />} />
        <Route path="/usuarios" element={<PaginaUsuarios />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
