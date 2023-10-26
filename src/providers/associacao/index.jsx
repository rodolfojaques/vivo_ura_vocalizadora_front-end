import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "../user";
import { toast } from "react-toastify";
import axios from "axios";

export const AssociacaoContext = createContext();

function AssociacaoProvider({ children }) {
  const [grupoAssociacaoAdd, setGrupoAssociacaoAdd] = useState(false);
  const [grupoAtuacaoAss, setGrupoAtuacaoAss] = useState([]);
  const [removeAssociacao, setRemoveAssociacao] = useState(false);
  const [idGrupoAtuacao, setIdGrupoAtuacao] = useState(0);
  const [idGrupoAlarme, setIdGrupoAlarme] = useState(0);

  const { baseURL, usuario } = useContext(UserContext);

  const addGrupoAtuacaoAss = async (idGrupo, idAtuacao) => {
    const data = {
      gpAtuacaoId: idAtuacao,
    };
    try {
      await axios.post(
        `${baseURL}/grupos-alarmes/add-grupo-atuacao/${idGrupo}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario.token}`,
          },
        }
      );
      toast.success("Grupo de atuação adicionado!");
    } catch (error) {}
  };

  const deleteGrupoAtuacaoAss = async (idGrupo, idAtuacao) => {
    const data = {
      gpAtuacaoId: idAtuacao,
    };
    try {
      await axios.patch(
        `${baseURL}/grupos-alarmes/delete-grupo-atuacao/${idGrupo}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario.token}`,
          },
        }
      );
      toast.success("Grupo de atuação deletado!");
    } catch (error) {}
  };

  return (
    <AssociacaoContext.Provider
      value={{
        grupoAssociacaoAdd,
        setGrupoAssociacaoAdd,
        grupoAtuacaoAss,
        setGrupoAtuacaoAss,
        removeAssociacao,
        setRemoveAssociacao,
        idGrupoAtuacao,
        setIdGrupoAtuacao,
        addGrupoAtuacaoAss,
        idGrupoAlarme,
        setIdGrupoAlarme,
        deleteGrupoAtuacaoAss,
      }}
    >
      {children}
    </AssociacaoContext.Provider>
  );
}

export default AssociacaoProvider;
