import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const baseURL = "http://localhost:3000";

  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("usuario"))
  );
  const [usuarioClicado, setUsuarioClicado] = useState([]);

  const [editSenha, setEditSenha] = useState(false);

  const [alterarPlantao, setAlterarPlantao] = useState(false);
  const [alterarPlantaoPagUser, setAlterarPlantaoPagUser] = useState(false);

  const [idUser, setIdUser] = useState({});

  const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));

  return (
    <UserContext.Provider
      value={{
        baseURL,
        usuario,
        usuarioClicado,
        setUsuarioClicado,
        setUsuario,
        editSenha,
        setEditSenha,
        alterarPlantao,
        setAlterarPlantao,
        alterarPlantaoPagUser,
        setAlterarPlantaoPagUser,
        idUser,
        setIdUser,
        usuarioLocal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
