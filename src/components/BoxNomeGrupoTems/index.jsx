import { useContext, useState } from "react";
import { BoxNomeGrupoStl, DivButtonAddContato } from "./styles";
import * as Icon from "react-bootstrap-icons";
import { GrupoAtuacaoContext } from "../../providers/gruposAtuacao";
import { UserContext } from "../../providers/user";
import { AssociacaoTemsContext } from "../../providers/associacaoTems";

function BoxNomeGrupoTemsComponente({
  nome,
  grupo,
  tipoGrupo,
  tipoAssociacao,
  setGrupoSelecionado,
  openModalExclude,
  setOpenModalExclude,
  openTipoAlarmeTems,
  setOpenTipoAlarmeTems,
  openExcludeAlarme,
  setOpenExcludeAlarme,
  setIdGpAlarme,
  setTypeGpAlarme,
}) {
  const [openInfos, setOpenInfos] = useState(false);

  const {
    deleteUser,
    setDeleteUser,
    setNameUserAndRe,
    setAddContato,
    addContato,
    setIdGrupo,
    openInfosUp,
    setOpenInfosUp,
    setTypeTeam,
    typeUpdateTeam, setTypeUpdateTeam
  } = useContext(GrupoAtuacaoContext);

  const {
    grupoAssociacaoTemsAdd,
    setGrupoAssociacaoTemsAdd,
    removeAssociacaoTems,
    setRemoveAssociacaoTems,
    setIdGrupoAlarmeTems,
    listOneGrupoAlarmeTems,
    setTypeGP,

  } = useContext(AssociacaoTemsContext);

  const { role } = useContext(UserContext);
  return (
    <BoxNomeGrupoStl>
      {!!openInfos ? (
        tipoGrupo === "atuação" ? (
          <div
            onClick={() => {
              setOpenInfos(!openInfos);
              setOpenInfosUp(!openInfosUp);
            }}
            className="container_box box1"
          >
            <p className="nome">{nome}</p>
            <p className="ttl_p">
              Gerente 1: <span className="info_span">{grupo.gerente1}</span>
            </p>
            <p className="ttl_p">
              Fone: <span className="info_span">{grupo.contato_ger1}</span>
            </p>
            <p className="ttl_p">
              RE: <span className="info_span">{grupo.RE1}</span>
            </p>
            <p className="ttl_p">
              Cargo: <span className="info_span">{grupo.cargo1}</span>
            </p>
            <hr />
            <p className="ttl_p">
              Gerente 2: <span className="info_span">{grupo.gerente2}</span>
            </p>
            <p className="ttl_p">
              Fone: <span className="info_span">{grupo.contato_ger2}</span>
            </p>
            <p className="ttl_p">
              RE: <span className="info_span">{grupo.RE2}</span>
            </p>
            <p className="ttl_p">
              Cargo: <span className="info_span">{grupo.cargo2}</span>
            </p>
            <hr />
            {grupo.usuarios.length > 0 &&
              grupo.usuarios.map((elem) => (
                <div key={elem.id} className="div_fields_contacts">
                  <p className="ttl_p space_icon">
                    Contato: {elem.nome}{" "}
                    {tipoAssociacao === "associacao" ? (
                      <></>
                    ) : (
                      <>
                        {role ? (
                          <></>
                        ) : (
                          <Icon.XCircleFill
                            size={16}
                            className="custom-icon"
                            color="darkorange"
                            onClick={() => {
                              setDeleteUser(!deleteUser);
                              setNameUserAndRe({
                                id: elem.id,
                                nome: elem.nome,
                                RE: elem.RE,
                                grupo: grupo.id,
                              });
                            }}
                          />
                        )}
                      </>
                    )}
                  </p>
                  <p className="ttl_p">
                    Fone: <span className="info_span">{elem.tel_cel}</span>
                  </p>
                  <p className="ttl_p">
                    RE: <span className="info_span">{elem.RE}</span>
                  </p>
                  <hr />
                </div>
              ))}
            {tipoAssociacao === "associacao" ? (
              <></>
            ) : (
              <DivButtonAddContato>
                <button
                  disabled={role}
                  type="button"
                  onClick={() => {
                    setAddContato(!addContato);
                    setIdGrupo(grupo.id);
                    setTypeTeam(grupo.typeTeam)
                    setTypeUpdateTeam(!typeUpdateTeam)
                  }}
                >
                  Adicionar Contato
                </button>
              </DivButtonAddContato>
            )}
          </div>
        ) : (
          <div
            onClick={() => {
              setOpenInfos(!openInfos);
              setOpenInfosUp(!openInfosUp);
            }}
            className="container_box box1"
          >
            <p className="nome">{nome}</p>
            <div className="infos_tipos">
              {
                <div className="chaves">
                  <p className="ttl_p">
                    estadoSigla:{" "}
                  </p>
                  <p className="ttl_p">
                    specificProblem:{" "}
                  </p>
                  <p className="ttl_p">
                    manager:{" "}
                  </p>
                  {/* <p className="ttl_p">
                    tipoDeAlarme:{" "}
                  </p>  */}
                  <p className="ttl_p">
                    frontPlantType:{" "}
                  </p>
                  <p className="ttl_p">
                    frontNetworkType:{" "}
                  </p> 
                  <p className="ttl_p">
                    frontTypeFailure:{" "}
                  </p>
                  <p className="ttl_p">
                    frontTypeTa:{" "}
                  </p>                
                </div>
              }

              <div className="box_valores">
                {
                  grupo.tiposAlarmes.map((tipo)=> {
                    return<div className="alm_tipo_infos">
                            <p className="info_tp_alm">{valueExists(tipo.estadoSigla)}</p>
                            <p className="info_tp_alm">{valueExists(tipo.specificProblem)}</p>
                            <p className="info_tp_alm">{valueExists(tipo.manager)}</p>
                            <p className="info_tp_alm">{valueExists(tipo.frontPlantType)}</p>
                            <p className="info_tp_alm">{valueExists(tipo.frontNetworkType)}</p>
                            <p className="info_tp_alm">{valueExists(tipo.frontTypeFailure)}</p>
                            <p className="info_tp_alm">{valueExists(tipo.frontTypeTa)}</p>
                          </div>
                  })
                }                
              </div>              
            </div>
            <p className="ttl_p">
              Grupos de Atuação:{" "}
              <span className="info_span">
                {grupo.gruposAtuacao.map((grupo) => {
                  return `${grupo.nomeGrupo}  /  `;
                })}
              </span>
            </p>
            {tipoAssociacao === "associacao" ? (
              <>
                <DivButtonAddContato>
                  <button
                    disabled={role}
                    type="button"
                    onClick={() => {
                      setGrupoAssociacaoTemsAdd(!grupoAssociacaoTemsAdd);
                      setIdGrupoAlarmeTems(grupo.id);
                      setTypeGP(grupo.typeTeam)
                    }}
                  >
                    Adicionar Grupo de atuação
                  </button>
                  <button
                    disabled={role}
                    className="excluir"
                    type="button"
                    onClick={() => {
                      setRemoveAssociacaoTems(!removeAssociacaoTems);
                      setIdGrupoAlarmeTems(grupo.id);
                      listOneGrupoAlarmeTems(grupo.id);
                      setTypeGP(grupo.typeTeam)
                    }}
                  >
                    Remover Grupo de atuação
                  </button>
                </DivButtonAddContato>
              </>
            ) : (
              <>
                <button
                  className="btn_add_tipo"
                  disabled={role}
                  onClick={(e) => {
                    e.preventDefault();
                    setIdGpAlarme(grupo.id);
                    setOpenTipoAlarmeTems(!openTipoAlarmeTems);
                  }}
                >
                  Novo Tipo de Alarme
                </button>
                <button
                  disabled={role}
                  style={{ backgroundColor: "red" }}
                  className="btn_add_tipo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIdGpAlarme(grupo.id);
                    setTypeGpAlarme(grupo.typeTeam);
                    setOpenExcludeAlarme(!openExcludeAlarme);
                  }}
                >
                  Excluir Tipo de Alarme
                </button>
              </>
            )}
          </div>
        )
      ) : (
        <div className="container_box box2">
          <p
            onClick={() => {
              setOpenInfos(!openInfos);
              setOpenInfosUp(!openInfosUp);
            }}
            className="nome"
          >
            {nome}
          </p>
          {tipoAssociacao === "associacao" ? (
            <></>
          ) : (
            <>
              {role ? (
                <> </>
              ) : (
                <Icon.XCircleFill
                  color="darkorange"
                  className="custom-icon"
                  onClick={() => {
                    setOpenModalExclude(!openModalExclude);
                    setGrupoSelecionado(grupo);
                  }}
                />
              )}
            </>
          )}
        </div>
      )}
    </BoxNomeGrupoStl>
  );
}

function valueExists(str) {
  const returnFunc = !!str? str : "N/D"
  return returnFunc
}

export default BoxNomeGrupoTemsComponente;
