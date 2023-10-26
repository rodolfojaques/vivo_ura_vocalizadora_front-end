import { useEffect } from "react";
import { ModalExcludeTipoAlarmesStl } from "./styles";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useState } from "react";
import { toast } from "react-toastify";
import { AssociacaoContext } from "../../providers/associacao";

function ModalExcludeTipoAlarmeComponent({
  openExcludeAlarme,
  setOpenExcludeAlarme,
  idGpAlarme,
  grupoAssosc,
  setGrupoAssosc,
  setIdGpAlarme,
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
  } = useContext(AssociacaoContext);

  const [alarmes, setAlarmes] = useState([]);
  const [tipoSelec, setTipoSelec] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/grupos-alarmes/${idGpAlarme}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        console.log(res.data.tiposAlarmes);
        setAlarmes(res.data.tiposAlarmes);
      })
      .catch((err) => console.error(err));
  }, []);

  const excluirTipoAlarme = () => {
    axios
      .delete(`${baseURL}/tipos-alarmes/delete/${tipoSelec}`, {
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
        <ModalExcludeTipoAlarmesStl>
          <h2 className="title">Adicionar Grupo de Atuação</h2>
          <select
            onChange={(e) => setIdGrupoAtuacao(e.target.value)}
            name=""
            id=""
            className="tipos"
          >
            <option>...</option>
            {grupoAtuacaoAss.map((grupo, i) => (
              <option key={i} className="options" value={grupo.id}>
                {grupo.nomeGrupo}
              </option>
            ))}
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
                addGrupoAtuacaoAss(idGrupoAlarme, idGrupoAtuacao);
                setGrupoAssosc(!grupoAssosc);
              }}
            >
              Adicionar
            </button>
          </div>
        </ModalExcludeTipoAlarmesStl>
      ) : (
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
      )}
      {removeAssociacao ? (
        <ModalExcludeTipoAlarmesStl>
          <h2 className="title">Remover Grupo de Atuação</h2>
          <select
            onChange={(e) => setIdGrupoAtuacao(e.target.value)}
            name=""
            id=""
            className="tipos"
          >
            <option>...</option>
            {grupoAtuacaoAss.map((grupo, i) => (
              <option key={i} className="options" value={grupo.id}>
                {grupo.nomeGrupo}
              </option>
            ))}
          </select>
          <div className="btns">
            <button
              onClick={() => setRemoveAssociacao(!removeAssociacao)}
              className="btn voltar"
            >
              Voltar
            </button>
            <button className="btn excluir">Excluir</button>
          </div>
        </ModalExcludeTipoAlarmesStl>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalExcludeTipoAlarmeComponent;
