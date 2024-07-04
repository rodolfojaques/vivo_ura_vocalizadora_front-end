import { useContext, useEffect, useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import ModalGruposAlarmesComponente from "../../components/ModalGruposAlarmes";
import { GruposDeAlarmesStl } from "./styles";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import ModalExcludeGruposComponent from "../../components/ModalExcludeGrupos";
import ListaSG from "../../components/ListaSG";
import ListaDL from "../../components/ListaDL";
import { UserContext } from "../../providers/user";
import axios from "axios";
import ModalExcludeTipoAlarmeComponent from "../../components/ModalExcludeTipoAlarme";
import BoxNomeGrupoTemsComponente from "../../components/BoxNomeGrupoTems";
import ModalTiposAlarmesTemsComponente from "../../components/ModalTiposAlarmesTems";
import ModalTiposAlarmesInfraComponente from "../../components/ModalTiposAlarmes";
import ModalFilterInput from "../../components/ModalFilterInput";
import { toast } from "react-toastify";
import ModalCargaMassiva from "../../components/ModalCargaMassivaSG";
import ModalCargaMassivaDL from "../../components/ModalCargaMassivaDL";

function GruposDeAlarmes() {
  const [grupoSelecionado, setGrupoSelecionado] = useState({});
  const [openModalAlarm, setOpenModalAlarm] = useState(false);
  const [openModalExclude, setOpenModalExclude] = useState(false);

  const [openTipoAlarme, setOpenTipoAlarme] = useState(false);
  const [openTipoAlarmeTems, setOpenTipoAlarmeTems] = useState(false);

  const [openExcludeAlarme, setOpenExcludeAlarme] = useState(false);
  const [idGpAlarme, setIdGpAlarme] = useState(0);
  const [typeGpAlarme, setTypeGpAlarme] = useState(0);
  

  const [gruposAlarmes, setGruposAlarmes] = useState([]);

  const [gruposAlarmesTems, setGruposAlarmesTems] = useState([]);

  const { baseURL, usuario, openFilterInput, openCargaMassiva, openCargaMassivaDL } = useContext(UserContext);

  const getGpAlarmesInfra = () => {
    axios
      .get(`${baseURL}/grupos-alarmes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        setGruposAlarmes(res.data);
      })
      .catch((err) => {
        console.error(err)
        toast.error("Erro ao listar grupos de alarme!");
      });    
  }

  const getGpAlarmesTems = () => {
    axios
      .get(`${baseURL}/grupos-alarmes-tems`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        setGruposAlarmesTems(res.data);
      })
      .catch((err) => {
        console.error(err)
        toast.error("Erro ao listar grupos de alarme!");
      });    
  }
  const filterInfraOnChange = async (e)=> {
    try {
      const response = await axios.post(`${baseURL}/grupos-alarmes/filter`, {value:e.target.value}, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGruposAlarmes(response.data);      
    } catch (error) {
      toast.error("Erro ao filtrar grupos de alarme!");
    }

  }

  const filterTemsOnChange = async (e)=> {
    try {
      const responseTems = await axios.post(`${baseURL}/grupos-alarmes-tems/filter`, {value: e.target.value}, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setGruposAlarmesTems(responseTems.data);      
    } catch (error) {
      toast.error("Erro ao filtrar grupos de alarme!");
    }

  }

  useEffect(() => {
    getGpAlarmesInfra()
    getGpAlarmesTems()
  }, [openModalExclude, openModalAlarm, openTipoAlarme, openExcludeAlarme, openTipoAlarmeTems, openFilterInput, openCargaMassiva, openCargaMassivaDL]);

  const deleteOnClick = (grp) => {
    const URL = grp.typeTeam === "SG"? `${baseURL}/grupos-alarmes/delete/${grp.id}` : `${baseURL}/grupos-alarmes-tems/delete/${grp.id}`

    axios
      .delete(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        setOpenModalExclude(!openModalExclude);
      })
      .catch((err) => {
        console.error(err)
        toast.error("Erro ao deletar grupo de alarme!");
      });
  };

  return (
    <GruposDeAlarmesStl>
      <Header />
      <CaminhoComponent path={"Grupos de alarmes"} />
      <ContainerGruposComponente
        tipoGrupo={"alarmes"}
        openModalAlarm={openModalAlarm}
        setOpenModalAlarm={setOpenModalAlarm}
        gruposAlarmes={gruposAlarmes}
        setGruposAlarmes={setGruposAlarmes}
      >
        <ListaSG
          handleValueChange={filterInfraOnChange}
        >
          {gruposAlarmes ? (
            gruposAlarmes.map((grupo, i) => (
              <BoxNomeGrupoComponente
                key={i}
                nome={grupo.nomeGrupo}
                grupo={grupo}
                grupoSelecionado={grupoSelecionado}
                setGrupoSelecionado={setGrupoSelecionado}
                openModalExclude={openModalExclude}
                setOpenModalExclude={setOpenModalExclude}
                openTipoAlarme={openTipoAlarme}
                setOpenTipoAlarme={setOpenTipoAlarme}
                setTypeGpAlarme={setTypeGpAlarme}
                idGpAlarme={idGpAlarme}
                setIdGpAlarme={setIdGpAlarme}
                openExcludeAlarme={openExcludeAlarme}
                setOpenExcludeAlarme={setOpenExcludeAlarme}
              />
            ))
          ) : (
            <></>
          )}
        </ListaSG>
        <ListaDL
          handleValueChange={filterTemsOnChange}
        >
          {gruposAlarmesTems ? (
            gruposAlarmesTems.map((grupo, i) => (
              <BoxNomeGrupoTemsComponente
                key={i}
                nome={grupo.nomeGrupo}
                grupo={grupo}
                grupoSelecionado={grupoSelecionado}
                setGrupoSelecionado={setGrupoSelecionado}
                openModalExclude={openModalExclude}
                setOpenModalExclude={setOpenModalExclude}
                openTipoAlarmeTems={openTipoAlarmeTems}
                setOpenTipoAlarmeTems={setOpenTipoAlarmeTems}
                setTypeGpAlarme={setTypeGpAlarme}
                idGpAlarme={idGpAlarme}
                setIdGpAlarme={setIdGpAlarme}
                openExcludeAlarme={openExcludeAlarme}
                setOpenExcludeAlarme={setOpenExcludeAlarme}
              />
            ))
          ) : (
            <></>
          )}
        </ListaDL>
      </ContainerGruposComponente>
      {!!openModalAlarm ? (
        <ModalGruposAlarmesComponente
          openModalAlarm={openModalAlarm}
          setOpenModalAlarm={setOpenModalAlarm}
          gruposAlarmes={gruposAlarmes}
          setGruposAlarmes={setGruposAlarmes}
        />
      ) : (
        <></>
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
      {!!openTipoAlarme ? (
        <ModalTiposAlarmesInfraComponente
          openTipoAlarme={openTipoAlarme}
          setOpenTipoAlarme={setOpenTipoAlarme}
          idGpAlarme={idGpAlarme}
          setIdGpAlarme={setIdGpAlarme}
        />
      ) : (
        <></>
      )}
      {!!openTipoAlarmeTems ? (
        <ModalTiposAlarmesTemsComponente
          openTipoAlarmeTems={openTipoAlarmeTems}
          setOpenTipoAlarmeTems={setOpenTipoAlarmeTems}
          idGpAlarme={idGpAlarme}
          setIdGpAlarme={setIdGpAlarme}
        />
      ) : (
        <></>
      )}
      {!!openExcludeAlarme ? (
        <ModalExcludeTipoAlarmeComponent
          openExcludeAlarme={openExcludeAlarme}
          setOpenExcludeAlarme={setOpenExcludeAlarme}
          idGpAlarme={idGpAlarme}
          setIdGpAlarme={setIdGpAlarme}
          setTypeGpAlarme={setTypeGpAlarme}
          typeGpAlarme={typeGpAlarme}
        />
      ) : (
        <></>
      )}
      {
        !!openFilterInput?
        <ModalFilterInput></ModalFilterInput>:<></>
      }
      {
        !!openCargaMassiva?
        <ModalCargaMassiva></ModalCargaMassiva>:<></>
      }
      {
        !!openCargaMassivaDL?
        <ModalCargaMassivaDL></ModalCargaMassivaDL>:<></>
      }
    </GruposDeAlarmesStl>
  );
}

export default GruposDeAlarmes;
