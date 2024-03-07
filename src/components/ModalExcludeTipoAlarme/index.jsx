import { useEffect } from "react";
import { BackgroundStl, ModalExcludeTipoAlarmesStl } from "./styles";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useState } from "react";
import { toast } from "react-toastify";
import { AssociacaoContext } from "../../providers/associacao";
import { AssociacaoTemsContext } from "../../providers/associacaoTems";

function ModalExcludeTipoAlarmeComponent({
  openExcludeAlarme,
  setOpenExcludeAlarme,
  idGpAlarme,
  grupoAssosc,
  setGrupoAssosc,
  setIdGpAlarme,typeGpAlarme
}) {
  const { baseURL, usuario } = useContext(UserContext);
  const {
    grupoAtuacaoAss,
    removeAssociacao,
    setRemoveAssociacao,
    idGrupoAtuacao,
    setIdGrupoAtuacao,
    addGrupoAtuacaoAss,
    idGrupoAlarme,
    listGrupoAlarme,
    deleteGrupoAtuacaoAss,
    typeGrupoAlarme
  } = useContext(AssociacaoContext);

  const {
    grupoAssociacaoTemsAdd,
    setGrupoAssociacaoTemsAdd,
    grupoAtuacaoTemsAss,
    setGrupoAtuacaoTemsAss,
    removeAssociacaoTems,
    setRemoveAssociacaoTems,
    idGrupoAtuacaoTems,
    setIdGrupoAtuacaoTems,
    addGrupoAtuacaoTemsAss,
    idGrupoAlarmeTems,
    setIdGrupoAlarmeTems,
    deleteGrupoAtuacaoTemsAss,
    setListGrupoAlarme,
    listOneGrupoAlarmeTems,
    addDelete,
    listGpAtuacaoTems,
    typeGP,listGrupoAlarmeTems
  } = useContext(AssociacaoTemsContext)

  const [alarmes, setAlarmes] = useState([]);
  const [tipoSelec, setTipoSelec] = useState([]);

  const typeGpAlm = typeGpAlarme || typeGrupoAlarme

  useEffect(() => {
    listGpAtuacaoTems()

    const URL = typeGpAlm === "SG" ? `${baseURL}/grupos-alarmes/${idGpAlarme}`: `${baseURL}/grupos-alarmes-tems/${idGpAlarme}`
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        setAlarmes(res.data.tiposAlarmes);
      })
      .catch((err) => console.error(err)); 
  }, []);
  
  const excluirTipoAlarme = () => {
    const URL = typeGpAlm === "SG" ? `${baseURL}/tipos-alarmes/delete/${tipoSelec}` : `${baseURL}/tipos-alarmes-tems/delete/${tipoSelec}`
    axios
      .delete(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        setOpenExcludeAlarme(!openExcludeAlarme);
        toast.success("Tipo de Alarme excluído com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {grupoAssosc ? (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setGrupoAssosc(!grupoAssosc)}}>
          <ModalExcludeTipoAlarmesStl>
            <h2 className="title">Adicionar Grupo de Atuação</h2>
            <select
              onClick={(e) => typeGP === "SG" ? setIdGrupoAtuacao(e.target.value) : setIdGrupoAtuacaoTems(e.target.value)}
              name=""
              id=""
              className="tipos"
            >
              <option>...</option>
              {typeGP === "SG" ?
              grupoAtuacaoAss.map((grupo, i) => (
                <option key={i} className="options" value={grupo.id}>
                  {grupo.nomeGrupo}
                </option>
              ))
              :
              grupoAtuacaoTemsAss.map((grupo, i) => (
                <option key={i} className="options" value={grupo.id}>
                  {grupo.nomeGrupo}
                </option>
              ))
            }
            </select>
            <div className="btns">
              <button
                onClick={() => setGrupoAssosc(!grupoAssosc)}
                className="btn voltar"
              >
                Voltar
              </button>
              <button
                className="btn adicionar"
                onClick={() => {
                  typeGP === "SG" ? addGrupoAtuacaoAss(idGrupoAlarme, idGrupoAtuacao) : addGrupoAtuacaoTemsAss(idGrupoAlarmeTems, idGrupoAtuacaoTems);
                  setGrupoAssosc(!grupoAssosc);
                }}
              >
                Adicionar
              </button>
            </div>
          </ModalExcludeTipoAlarmesStl>
        </BackgroundStl>
      ) : (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenExcludeAlarme(!openExcludeAlarme)}}>
          <ModalExcludeTipoAlarmesStl>
            <h2 className="title">Excluir Tipo de Alarme</h2>
            <select
              onChange={(e) => setTipoSelec(e.target.value)}
              name=""
              id=""
              className="tipos"
            >
              <option>...</option>
              {alarmes.map((alm, i) => (
                <option key={i} className="options" value={alm.id}>{`
                          ${alm.uf}, ${alm.site}, ${alm.tipoAlarme}, ${alm.classificacao}, ${alm.localidade}
                          `}</option>
              ))}
            </select>
            <div className="btns">
              <button
                onClick={() => setOpenExcludeAlarme(!openExcludeAlarme)}
                className="btn voltar"
              >
                Voltar
              </button>
              <button onClick={() => excluirTipoAlarme()} className="btn excluir">
                Excluir
              </button>
            </div>
          </ModalExcludeTipoAlarmesStl>          
        </BackgroundStl>
      )}
      {removeAssociacao || removeAssociacaoTems ? (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) 
        typeGP === "SG" ? 
          setRemoveAssociacao(!removeAssociacao) 
          : 
          setRemoveAssociacaoTems(!removeAssociacaoTems);}
        }>
          <ModalExcludeTipoAlarmesStl>
            <h2 className="title">Remover Grupo de Atuação</h2>
            <select
              onChange={(e) => typeGP === "SG" ? setIdGrupoAtuacao(e.target.value) : setIdGrupoAtuacaoTems(e.target.value)}
              name=""
              id=""
              className="tipos"
            >
              <option>...</option>
              {typeGP === "SG" ?
                listGrupoAlarme.map((grupo, i) => (
                  <option key={i} className="options" value={grupo.id}>
                    {grupo.nomeGrupo}
                  </option>
                ))
              :
                listGrupoAlarmeTems.map((grupo, i) => (
                  <option key={i} className="options" value={grupo.id}>
                    {grupo.nomeGrupo}
                  </option>
                ))         
              }
            </select>
            <div className="btns">
              <button
                onClick={() =>  setRemoveAssociacao(!removeAssociacao)}
                className="btn voltar"
              >
                Voltar
              </button>
              <button
                className="btn excluir"
                onClick={() => {
                  typeGP === "SG" ? 
                  deleteGrupoAtuacaoAss(idGrupoAlarme, idGrupoAtuacao) && setRemoveAssociacao(!removeAssociacao) 
                  : 
                  deleteGrupoAtuacaoTemsAss(idGrupoAlarmeTems, idGrupoAtuacaoTems) && setRemoveAssociacaoTems(!removeAssociacaoTems);
                }}
              >
                Excluir
              </button>
            </div>
          </ModalExcludeTipoAlarmesStl>          
        </BackgroundStl>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalExcludeTipoAlarmeComponent;
