import { useEffect } from "react";
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
  const [role, setRole] = useState(false);

  const [idUser, setIdUser] = useState({});
  
  const [openFilterInput, setOpenFilterInput] = useState(false);  
  const [openExcludeFilterInput, setOpenExcludeFilterInput] = useState(false);  
  const [dadosExclude, setDadosExclude] = useState({});  

  useEffect(() => {
    if (usuario?.user?.perfil?.toLowerCase() === "operador") {
      setRole(true);
    } else {
      setRole(false);
    }
  }, [usuario]);

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
        role,
        setRole,
        openFilterInput, 
        setOpenFilterInput,
        dadosExclude, setDadosExclude,
        openExcludeFilterInput, setOpenExcludeFilterInput
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
