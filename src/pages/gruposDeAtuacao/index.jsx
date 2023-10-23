import { useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import { GruposDeAtuacaoStl } from "./styles";
import ModalGruposAtuacaoComponente from "../../components/ModalGruposAtuacao";
import ListaSG from "../../components/ListaSG";
import ListaDL from "../../components/ListaDL";
import { gruposAtuacaoMock } from "../../utils/grupos";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import ModalExcludeGruposComponent from "../../components/ModalExcludeGrupos";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { GrupoAtuacaoContext } from "../../providers/gruposAtuacao";

function GruposDeAtuacao() {
  const [openModalGruposAtuacao, setOpenModalGruposAtuacao] = useState(false);
  const [openModalExclude, setOpenModalExclude] = useState(false);
  const [grupoSelecionado, setGrupoSelecionado] = useState({});
  const [grupoAtuacao, setGrupoAtuacao] = useState([]);

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
    } catch (error) {}
  };

  const handleValueChange = (event, arr) => {
    const value = event.target.value || "";

    const newListaAlarmes = arr.filter((obj) => {
      if (
        obj?.nomeGrupo?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.RE1?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.nome1?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato1?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.cargo1?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.RE2?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.nome2?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato2?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.cargo2?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.RE3?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.nome3?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato3?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.cargo3?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.RE4?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.nome4?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato4?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.cargo4?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.RE5?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.nome5?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.contato5?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      } else if (
        obj?.cargo5?.toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return obj;
      }
    });
    setGrupoAtuacao(newListaAlarmes);
  };

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
  useEffect(() => {
    allGroupsAtuacao();
  }, [
    openModalExclude,
    openModalGruposAtuacao,
    deleteUser,
    addContato,
    openInfosUp,
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
          handleValueChange={handleValueChange}
          gruposAtuacaoMock={gruposAtuacaoMock}
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
        <ListaDL></ListaDL>
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
