import { useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import { GruposDeAtuacaoStl } from "./styles";
import ModalGruposAtuacaoComponente from "../../components/ModalGruposAtuacao";
import ListaSG from "../../components/ListaSG";
import ListaDL from "../../components/ListaDL";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import ModalExcludeGruposComponent from "../../components/ModalExcludeGrupos";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { GrupoAtuacaoContext } from "../../providers/gruposAtuacao";
import BoxNomeGrupoTemsComponente from "../../components/BoxNomeGrupoTems";

function GruposDeAtuacao() {
  const [openModalGruposAtuacao, setOpenModalGruposAtuacao] = useState(false);
  const [openModalExclude, setOpenModalExclude] = useState(false);
  const [grupoSelecionado, setGrupoSelecionado] = useState({});
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);
  const [grupoAtuacaoFiltered, setGrupoAtuacaoFiltered] = useState([]);
  const [grupoAtuacaoTems, setGrupoAtuacaoTems] = useState([]);
  const [grupoAtuacaoTemsFiltered, setGrupoAtuacaoTemsFiltered] = useState([]);
  const [stateGrupo, setStateGrupo] = useState(false);

  const [isSearch, setIsSearch] = useState(false)
  const [dataFilter, setDataFilter] = useState({value:null})

  const [isSearchTems, setIsSearchTems] = useState(false)
  const [dataFilterTems, setDataFilterTems] = useState({value:null})

  const { baseURL, usuario } = useContext(UserContext);
  const { deleteUser, addContato, openInfosUp } =
    useContext(GrupoAtuacaoContext);

  const deleteOnClick = async (grupo) => {
    try {
      await axios.delete(`${baseURL}/grupos-atuacao/delete/${grupo.id}`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      toast.success("Grupo de atuação excluído com sucesso!");
      setStateGrupo(!stateGrupo);
    } catch (error) {}
  };

  const groupsAtuacaoInfra = async () => {
    try {
      const response = await axios.get(`${baseURL}/grupos-atuacao`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacao(response.data);
      setGrupoAtuacaoFiltered(response.data);

    } catch (error) {
      console.error("Erro ao buscar grupos",error);
    }
  };

  const groupsAtuacaoTems = async () => {
    try {
      const responseTems = await axios.get(`${baseURL}/grupos-atuacao/tems`, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGrupoAtuacaoTems(responseTems.data);
      setGrupoAtuacaoTemsFiltered(responseTems.data);   

    } catch (error) {
      console.error("Erro ao buscar grupos",error);
    }
  };

  const filterInfraOnChange = async (e)=> {
    const response = await axios.post(`${baseURL}/grupos-atuacao/filter`, {value:e.target.value}, {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    });
    setGrupoAtuacao(response.data);
    setGrupoAtuacaoFiltered(response.data);
  }

  const filterTemsOnChange = async (e)=> {
    const responseTems = await axios.post(`${baseURL}/grupos-atuacao/tems/filter`, {value: e.target.value}, {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    });
    setGrupoAtuacaoTems(responseTems.data);
    setGrupoAtuacaoTemsFiltered(responseTems.data);
    console.log(grupoAtuacaoTems);
  }

  useEffect(() => {
    groupsAtuacaoInfra();
    groupsAtuacaoTems();
  }, [
    openModalExclude,
    openModalGruposAtuacao,
    deleteUser,
    addContato,
    openInfosUp,
    stateGrupo,
  ]);

  return (
    <GruposDeAtuacaoStl>
      <Header />
      <CaminhoComponent path={"Grupos de Atuação"} />
      <ContainerGruposComponente
        tipoGrupo={"atuação"}
        openModalGruposAtuacao={openModalGruposAtuacao}
        setOpenModalGruposAtuacao={setOpenModalGruposAtuacao}
      >
        <ListaSG
          tipoPag={"atuação"}
          handleValueChange={filterInfraOnChange}
          gruposAtuacaoMock={grupoAtuacaoFiltered}
        >
          {grupoAtuacao.map((grupo, i) => (
            <BoxNomeGrupoComponente
              key={i}
              tipoGrupo={"atuação"}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              openModalExclude={openModalExclude}
              setOpenModalExclude={setOpenModalExclude}
              grupoSelecionado={grupoSelecionado}
              setGrupoSelecionado={setGrupoSelecionado}
            />
          ))}
        </ListaSG>
        <ListaDL
          tipoPag={"atuação"}
          handleValueChange={filterTemsOnChange}
        >
          {grupoAtuacaoTems.map((grupo, i) => (
            <BoxNomeGrupoTemsComponente
              key={i}
              tipoGrupo={"atuação"}
              nome={grupo.nomeGrupo}
              grupo={grupo}
              openModalExclude={openModalExclude}
              setOpenModalExclude={setOpenModalExclude}
              grupoSelecionado={grupoSelecionado}
              setGrupoSelecionado={setGrupoSelecionado}
            />
          ))}
        </ListaDL>
      </ContainerGruposComponente>
      {!!openModalGruposAtuacao ? (
        <ModalGruposAtuacaoComponente
          grupoAtuacao={grupoAtuacao}
          setGrupoAtuacao={setGrupoAtuacao}
          openModalGruposAtuacao={openModalGruposAtuacao}
          setOpenModalGruposAtuacao={setOpenModalGruposAtuacao}
        />
      ) : (
        <></>
      )}
      {addContato && (
        <ModalGruposAtuacaoComponente
          grupoAtuacao={grupoAtuacao}
          setGrupoAtuacao={setGrupoAtuacao}
          openModalGruposAtuacao={openModalGruposAtuacao}
          setOpenModalGruposAtuacao={setOpenModalGruposAtuacao}
        />
      )}
      {!!openModalExclude ? (
        <ModalExcludeGruposComponent
          deleteOnClick={deleteOnClick}
          openModalExclude={openModalExclude}
          setOpenModalExclude={setOpenModalExclude}
          grupo={grupoSelecionado}
        />
      ) : (
        <></>
      )}
      {!!deleteUser ? (
        <ModalExcludeGruposComponent
          deleteOnClick={deleteOnClick}
          openModalExclude={openModalExclude}
          setOpenModalExclude={setOpenModalExclude}
          grupo={grupoSelecionado}
        />
      ) : (
        <></>
      )}
    </GruposDeAtuacaoStl>
  );
}

export default GruposDeAtuacao;
