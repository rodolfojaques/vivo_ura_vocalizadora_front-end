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
  const [gruposAlarmesInicial, setGruposAlarmesInicial] = useState([]);

  const [gruposAlarmesTems, setGruposAlarmesTems] = useState([]);
  const [gruposAlarmesTemsInicial, setGruposAlarmesTemsInicial] = useState([]);

  const { baseURL, usuario } = useContext(UserContext);

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
        setGruposAlarmesInicial(res.data);
      })
      .catch((err) => console.log(err));    
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
        setGruposAlarmesTemsInicial(res.data);
      })
      .catch((err) => console.log(err));    
  }

  useEffect(() => {
    getGpAlarmesInfra()
    getGpAlarmesTems()
  }, [openModalExclude, openModalAlarm, openTipoAlarme, openExcludeAlarme]);

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
        console.log(res.status);
      })
      .catch((err) => console.log(err));
  };

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
    setGruposAlarmes(newListaAlarmes);
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
          handleValueChange={handleValueChange}
          gruposAlarmes={gruposAlarmesInicial}
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
        <ListaDL>
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
    </GruposDeAlarmesStl>
  );
}

export default GruposDeAlarmes;
