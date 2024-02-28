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
  const [listGrupoAlarme, setListGrupoAlarme] = useState([]);
  const [addDelete, setAddDelete] = useState(false);

  const [typeGrupoAlarme,setTypeGrupoAlarme] = useState("SG")

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
      setAddDelete(!addDelete);
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
      setAddDelete(!addDelete);
      toast.success("Grupo de atuação deletado!");
    } catch (error) {}
  };

  const listOneGrupoAlarme = async (idGrupo) => {
    try {
      const response = await axios.get(`${baseURL}/grupos-alarmes/${idGrupo}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setListGrupoAlarme(response.data.gruposAtuacao);
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
        listGrupoAlarme,
        setListGrupoAlarme,
        listOneGrupoAlarme,
        addDelete,typeGrupoAlarme,setTypeGrupoAlarme
      }}
    >
      {children}
    </AssociacaoContext.Provider>
  );
}

export default AssociacaoProvider;
