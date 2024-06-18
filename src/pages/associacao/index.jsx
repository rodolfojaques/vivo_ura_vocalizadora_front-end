import axios from "axios";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import ListaDL from "../../components/ListaDL";
import ListaSG from "../../components/ListaSG";
import { AssociacaoStl } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useEffect } from "react";
import { useState } from "react";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import { AssociacaoContext } from "../../providers/associacao";
import ModalExcludeTipoAlarmeComponent from "../../components/ModalExcludeTipoAlarme";
import { toast } from "react-toastify";

function Associacao() {
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [grupoAlarme, setGrupoAlarme] = useState([]);

  const { baseURL, usuario } = useContext(UserContext);
  const {
    grupoAssociacaoAdd,
    setGrupoAssociacaoAdd,
    setGrupoAtuacaoAss,
    removeAssociacao,
    addDelete,
  } = useContext(AssociacaoContext);

  const allGroupsAtuacao = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-atuacao`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacao(response.data);
      setGrupoAtuacaoAss(response.data);
    } catch (error) {
      toast.error("Erro ao listar grupos de atuação!");
    }
  };

  const allGroupsAlarme = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-alarmes`, {
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
      const response = await axios.post(`${baseURL}/grupos-alarmes/filter`, {value:e.target.value}, {
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
      const response = await axios.post(`${baseURL}/grupos-atuacao/filter`, {value: e.target.value}, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacao(response.data);
      setGrupoAtuacaoAss(response.data);      
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
      <CaminhoComponent path={"Associação"} />
      <ContainerGruposComponente tipoGrupo={"associacao"}>
        <ListaSG
          tipoPag={"associacao"}
          handleValueChange={filterAlarmesOnChange}
        >
          {grupoAlarme.map((grupo, i) => (
            <BoxNomeGrupoComponente
              key={i}
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
            <BoxNomeGrupoComponente
              key={i}
              tipoGrupo={"atuação"}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              tipoAssociacao={"associacao"}
            />
          ))}
        </ListaDL>
      </ContainerGruposComponente>
      {grupoAssociacaoAdd && (
        <ModalExcludeTipoAlarmeComponent
          grupoAssosc={grupoAssociacaoAdd}
          setGrupoAssosc={setGrupoAssociacaoAdd}
        />
      )}
      {removeAssociacao && (
        <ModalExcludeTipoAlarmeComponent
          grupoAssosc={grupoAssociacaoAdd}
          setGrupoAssosc={setGrupoAssociacaoAdd}
        />
      )}
    </AssociacaoStl>
  );
}

export default Associacao;
