import axios from "axios";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import ListaDL from "../../components/ListaDL";
import ListaSG from "../../components/ListaSG";
import { AssociacaoStl } from "./styles";
import { UserContext } from "../../providers/user";
import { useEffect, useState, useContext } from "react";
import ModalExcludeTipoAlarmeComponent from "../../components/ModalExcludeTipoAlarme";
import BoxNomeGrupoTemsComponente from "../../components/BoxNomeGrupoTems";
import { AssociacaoTemsContext } from "../../providers/associacaoTems";
import { toast } from "react-toastify";

function AssociacaoTems() {
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [grupoAlarme, setGrupoAlarme] = useState([]);

  const { baseURL, usuario } = useContext(UserContext);
  const {
    grupoAssociacaoTemsAdd,
    setGrupoAssociacaoTemsAdd,
    setGrupoAtuacaoTemsAss,
    removeAssociacaoTems,
    addDelete
  } = useContext(AssociacaoTemsContext);

  const allGroupsAtuacao = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-atuacao/tems`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacao(response.data);
      setGrupoAtuacaoTemsAss(response.data);
    } catch (error) {
      toast.error("Erro ao listar grupos de atuação!");
    }
  };

  const allGroupsAlarme = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-alarmes-tems`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAlarme(response.data);
    } catch (error) {
      toast.error("Erro ao listar grupos de alarme!");
    }
  };

  const filterAlarmesOnChange = async (e)=> {
    try {
      const response = await axios.post(`${baseURL}/grupos-alarmes-tems/filter`, {value:e.target.value}, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAlarme(response.data);      
    } catch (error) {
      toast.error("Erro ao filtrar grupos de alarme!");
    }

  }

  const filterAtuacaoOnChange = async (e)=> {
    try {
      const response = await axios.post(`${baseURL}/grupos-atuacao/tems/filter`, {value: e.target.value}, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacao(response.data);
      setGrupoAtuacaoTemsAss(response.data);      
    } catch (error) {
      toast.error("Erro ao filtrar grupos de atuação!");
    }

  }

  useEffect(() => {
    allGroupsAtuacao();
    allGroupsAlarme();
  }, [addDelete]);

  return (
    <AssociacaoStl>
      <Header />
      <CaminhoComponent path={"Associação DL-Tems"} typeAlarm={"DL"}/>
      <ContainerGruposComponente tipoGrupo={"associacao"}>
        <ListaSG
          tipoPag={"associacao"}
          handleValueChange={filterAlarmesOnChange}
        >
          {grupoAlarme.map((grupo, i) => (
            <BoxNomeGrupoTemsComponente
              key={grupo?.id}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              tipoAssociacao={"associacao"}
            />
          ))}
        </ListaSG>
        <ListaDL
          grupoAtuacao={"ATUAÇÃO"}
          handleValueChange={filterAtuacaoOnChange}
        >
          {grupoAtuacao.map((grupo, i) => (
            <BoxNomeGrupoTemsComponente
              key={grupo?.id}
              tipoGrupo={"atuação"}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              tipoAssociacao={"associacao"}
            />
          ))}
        </ListaDL>
      </ContainerGruposComponente>
      {grupoAssociacaoTemsAdd && (
        <ModalExcludeTipoAlarmeComponent
          grupoAssosc={grupoAssociacaoTemsAdd}
          setGrupoAssosc={setGrupoAssociacaoTemsAdd}
        />
      )}
      {removeAssociacaoTems && (
        <ModalExcludeTipoAlarmeComponent
          grupoAssosc={grupoAssociacaoTemsAdd}
          setGrupoAssosc={setGrupoAssociacaoTemsAdd}
        />
      )}
    </AssociacaoStl>
  );
}

export default AssociacaoTems;
