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

function Associacao() {
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [grupoAlarme, setGrupoAlarme] = useState([]);
  const { baseURL, usuario } = useContext(UserContext);
  const allGroupsAtuacao = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-atuacao`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacao(response.data);
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
              //   openModalExclude={openModalExclude}
              //   setOpenModalExclude={setOpenModalExclude}
              //   grupoSelecionado={grupoSelecionado}
              //   setGrupoSelecionado={setGrupoSelecionado}
            />
          ))}
        </ListaDL>
      </ContainerGruposComponente>
    </AssociacaoStl>
  );
}

export default Associacao;
