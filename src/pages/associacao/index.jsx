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

function Associacao() {
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [gruposAtuacaoInicial, setGruposAtuacaoInicial] = useState([]);
  const [grupoAlarme, setGrupoAlarme] = useState([]);
  const [gruposAlarmesInicial, setGruposAlarmesInicial] = useState([]);

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
      setGruposAtuacaoInicial(response.data);
    } catch (error) {}
  };

  const allGroupsAlarme = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-alarmes`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAlarme(response.data);
      setGruposAlarmesInicial(response.data);
    } catch (error) {}
  };

  const filterAlarmesOnChange = async (e)=> {
    const response = await axios.post(`${baseURL}/grupos-alarmes/filter`, {value:e.target.value}, {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    });
    setGrupoAlarme(response.data);
  }

  const filterAtuacaoOnChange = async (e)=> {
    const response = await axios.post(`${baseURL}/grupos-atuacao/filter`, {value: e.target.value}, {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    });
    setGrupoAtuacao(response.data);
    setGrupoAtuacaoAss(response.data);
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
