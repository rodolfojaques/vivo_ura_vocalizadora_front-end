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
import { set } from "react-hook-form";

function Associacao() {
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [grupoAlarme, setGrupoAlarme] = useState([]);
  const { baseURL, usuario } = useContext(UserContext);
  const {
    grupoAssociacaoAdd,
    setGrupoAssociacaoAdd,
    setGrupoAtuacaoAss,
    removeAssociacao,
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
    } catch (error) {}
  };
  useEffect(() => {
    allGroupsAtuacao();
    allGroupsAlarme();
  }, []);
  return (
    <AssociacaoStl>
      <Header />
      <CaminhoComponent path={"Associação"} />
      <ContainerGruposComponente tipoGrupo={"associacao"}>
        <ListaSG tipoPag={"associacao"}>
          {grupoAlarme.map((grupo, i) => (
            <BoxNomeGrupoComponente
              key={i}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              tipoAssociacao={"associacao"}
              //   openModalExclude={openModalExclude}
              //   setOpenModalExclude={setOpenModalExclude}
              //   grupoSelecionado={grupoSelecionado}
              //   setGrupoSelecionado={setGrupoSelecionado}
            />
          ))}
        </ListaSG>
        <ListaDL grupoAtuacao={"ATUAÇÃO"}>
          {grupoAtuacao.map((grupo, i) => (
            <BoxNomeGrupoComponente
              key={i}
              tipoGrupo={"atuação"}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              tipoAssociacao={"associacao"}
              //   openModalExclude={openModalExclude}
              //   setOpenModalExclude={setOpenModalExclude}
              //   grupoSelecionado={grupoSelecionado}
              //   setGrupoSelecionado={setGrupoSelecionado}
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
