import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../user";
import axios from "axios";
import { toast } from "react-toastify";

export const GrupoAtuacaoContext = createContext();

function GrupoAtuacaoProvider({ children }) {
  const [deleteUser, setDeleteUser] = useState(false);
  const [addContato, setAddContato] = useState(false);
  const [nameUserAndRe, setNameUserAndRe] = useState({});
  const [idGrupo, setIdGrupo] = useState(0);
  const [openInfosUp, setOpenInfosUp] = useState(false);
  const { baseURL, usuario } = useContext(UserContext);

  const deleteUserReq = async (id, grupoId) => {
    const data = {
      userId: id,
    };
    try {
      await axios.patch(
        `${baseURL}/grupos-atuacao/delete-user/${grupoId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${usuario.token}`,
          },
        }
      );

      toast.success("Usuário excluído com sucesso!");
    } catch (error) {}
  };

  const addUserGrupoAtuacao = (idUser, idGrupoAtuacao) => {
    try {
      const grupoDeAtuacaoId = {
        gruposAtuacao: idGrupoAtuacao,
      };
      idUser.forEach(async (elem) => {
        await axios.patch(
          `${baseURL}/usuario/update/${elem}`,
          grupoDeAtuacaoId,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${usuario.token}`,
            },
          }
        );
      });
      toast.success("Usuário adicionado ao grupo!");
    } catch (error) {}
  };

  return (
    <GrupoAtuacaoContext.Provider
      value={{
        deleteUser,
        setDeleteUser,
        addContato,
        setAddContato,
        deleteUserReq,
        nameUserAndRe,
        setNameUserAndRe,
        idGrupo,
        setIdGrupo,
        addUserGrupoAtuacao,
        openInfosUp,
        setOpenInfosUp,
      }}
    >
      {children}
    </GrupoAtuacaoContext.Provider>
  );
}

export default GrupoAtuacaoProvider;
