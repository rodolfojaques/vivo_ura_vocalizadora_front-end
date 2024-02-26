import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "../user";
import { toast } from "react-toastify";
import axios from "axios";

export const AssociacaoTemsContext = createContext();

function AssociacaoTemsProvider({ children }) {
  const [grupoAssociacaoTemsAdd, setGrupoAssociacaoTemsAdd] = useState(false);
  const [grupoAtuacaoTemsAss, setGrupoAtuacaoTemsAss] = useState([]);
  const [removeAssociacaoTems, setRemoveAssociacaoTems] = useState(false);
  const [idGrupoAtuacaoTems, setIdGrupoAtuacaoTems] = useState(0);
  const [idGrupoAlarmeTems, setIdGrupoAlarmeTems] = useState(0);
  const [listGrupoAlarmeTems, setListGrupoAlarmeTems] = useState([]);
  const [addDelete, setAddDelete] = useState(false);
  const [typeGP, setTypeGP] = useState("DL");

  const { baseURL, usuario } = useContext(UserContext);

  const listGpAtuacaoTems = async () => {
    try {
      axios.get(
        `${baseURL}/grupos-atuacao/tems`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario.token}`,
          },
        }
      ).then(resp=>setGrupoAtuacaoTemsAss(resp.data))
      
    } catch (error) {}
  };

  const addGrupoAtuacaoTemsAss = async (idGrupo, idAtuacao) => {
    const data = {
      gpAtuacaoId: idAtuacao,
    };
    try {
      await axios.post(
        `${baseURL}/grupos-alarmes-tems/add-grupo-atuacao/${idGrupo}`,
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

  const deleteGrupoAtuacaoTemsAss = async (idGrupo, idAtuacao) => {
    const data = {
      gpAtuacaoId: idAtuacao,
    };
    try {
      await axios.patch(
        `${baseURL}/grupos-alarmes-tems/delete-grupo-atuacao/${idGrupo}`,
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

  const listOneGrupoAlarmeTems = async (idGrupo) => {
    try {
      const response = await axios.get(`${baseURL}/grupos-alarmes-tems/${idGrupo}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setListGrupoAlarmeTems(response.data.gruposAtuacao);
    } catch (error) {}
  };

  return (
    <AssociacaoTemsContext.Provider
      value={{
        grupoAssociacaoTemsAdd,
        setGrupoAssociacaoTemsAdd,
        grupoAtuacaoTemsAss,
        setGrupoAtuacaoTemsAss,
        removeAssociacaoTems,
        setRemoveAssociacaoTems,
        idGrupoAtuacaoTems,
        setIdGrupoAtuacaoTems,
        addGrupoAtuacaoTemsAss,
        idGrupoAlarmeTems,
        setIdGrupoAlarmeTems,
        deleteGrupoAtuacaoTemsAss,
        listGrupoAlarmeTems,
        setListGrupoAlarmeTems,
        listOneGrupoAlarmeTems,
        addDelete,
        listGpAtuacaoTems,typeGP, setTypeGP
      }}
    >
      {children}
    </AssociacaoTemsContext.Provider>
  );
}

export default AssociacaoTemsProvider;
