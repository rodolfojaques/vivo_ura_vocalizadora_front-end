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

function AssociacaoTems() {
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [gruposAtuacaoInicial, setGruposAtuacaoInicial] = useState([]);
  const [grupoAlarme, setGrupoAlarme] = useState([]);
  const [gruposAlarmesInicial, setGruposAlarmesInicial] = useState([]);

  const { baseURL, usuario } = useContext(UserContext);
  const {
    grupoAssociacaoTemsAdd,
    setGrupoAssociacaoTemsAdd,
    setGrupoAtuacaoAss,
    removeAssociacaoTems,
    addDelete,
    typeGP,
    setTypeGP,
  } = useContext(AssociacaoTemsContext);

  const allGroupsAtuacao = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-atuacao/tems`, {
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
      const response = await axios.get(`${baseURL}/grupos-alarmes-tems`, {
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
      <CaminhoComponent path={"Associação DL-Tems"} typeAlarm={"DL"}/>
      <ContainerGruposComponente tipoGrupo={"associacao"}>
        <ListaSG
          tipoPag={"associacao"}
          handleValueChange={handleValueChange}
          gruposAlarmesMock={gruposAlarmesInicial}
        >
          {grupoAlarme.map((grupo, i) => (
            <BoxNomeGrupoTemsComponente
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
            <BoxNomeGrupoTemsComponente
              key={i}
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
