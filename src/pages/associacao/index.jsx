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
  useEffect(() => {
    allGroupsAtuacao();
    allGroupsAlarme();
  }, [addDelete]);

  const handleValueChange = (event, arr) => {
    const value = event.target.value || "";

    const newListaAlarmes = arr.filter((obj) => {
      if (
        obj?.nomeGrupo?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.tiposAlarmes?.uf
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.tiposAlarmes?.site
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.tiposAlarmes?.tipoAlarme
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.tiposAlarmes?.classificacao
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.tiposAlarmes?.localidade
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      }
    });
    setGrupoAlarme(newListaAlarmes);
  };

  const handleValueChangeAtuacao = (event, arr) => {
    const value = event.target.value || "";

    const newListaAlarmes = arr.filter((obj) => {
      if (
        obj?.nomeGrupo?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.gerente1?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.gerente2?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato_ger1
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato_ger1
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return obj;
      }
    });
    setGrupoAtuacao(newListaAlarmes);
  };
  return (
    <AssociacaoStl>
      <Header />
      <CaminhoComponent path={"Associação"} />
      <ContainerGruposComponente tipoGrupo={"associacao"}>
        <ListaSG
          tipoPag={"associacao"}
          handleValueChange={handleValueChange}
          gruposAlarmesMock={gruposAlarmesInicial}
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
          handleValueChange={handleValueChangeAtuacao}
          grupoAtuacaoInicial={gruposAtuacaoInicial}
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
