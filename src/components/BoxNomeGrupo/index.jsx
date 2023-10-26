import { useContext, useState } from "react";
import { BoxNomeGrupoStl, DivButtonAddContato } from "./styles";
import * as Icon from "react-bootstrap-icons";
import { GrupoAtuacaoContext } from "../../providers/gruposAtuacao";
import { AssociacaoContext } from "../../providers/associacao";

function BoxNomeGrupoComponente({
  nome,
  grupo,
  tipoGrupo,
  tipoAssociacao,
  listaGruposAlarmes,
  setListaGruposAlarmes,
  grupoSelecionado,
  setGrupoSelecionado,
  openModalExclude,
  setOpenModalExclude,
  openTipoAlarme,
  setOpenTipoAlarme,
  openExcludeAlarme,
  setOpenExcludeAlarme,
  idGpAlarme,
  setIdGpAlarme,
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
  } = useContext(GrupoAtuacaoContext);

  const {
    grupoAssociacaoAdd,
    setGrupoAssociacaoAdd,
    removeAssociacao,
    setRemoveAssociacao,
    setIdGrupoAlarme,
    listOneGrupoAlarme,
  } = useContext(AssociacaoContext);
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
                    Contato 3: {elem.nome}{" "}
                    {tipoAssociacao === "associacao" ? (
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
                  type="button"
                  onClick={() => {
                    setAddContato(!addContato);
                    setIdGrupo(grupo.id);
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
            <p className="ttl_p">
              UF:{" "}
              <span className="info_span">
                {grupo.tiposAlarmes.map((tipo) => {
                  return `${tipo.uf}  /  `;
                })}
              </span>
            </p>
            <p className="ttl_p">
              Site:{" "}
              <span className="info_span">
                {grupo.tiposAlarmes.map((tipo) => {
                  return `${tipo.site}  /  `;
                })}
              </span>
            </p>
            <p className="ttl_p">
              Tipo de alarme:{" "}
              <span className="info_span">
                {grupo.tiposAlarmes.map((tipo) => {
                  return `${tipo.tipoAlarme}  /  `;
                })}
              </span>
            </p>
            <p className="ttl_p">
              Classificação:{" "}
              <span className="info_span">
                {grupo.tiposAlarmes.map((tipo) => {
                  return `${tipo.classificacao}  /  `;
                })}
              </span>
            </p>
            <p className="ttl_p">
              Localidade:{" "}
              <span className="info_span">
                {grupo.tiposAlarmes.map((tipo) => {
                  return `${tipo.localidade}  /  `;
                })}
              </span>
            </p>
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
                    type="button"
                    onClick={() => {
                      setGrupoAssociacaoAdd(!grupoAssociacaoAdd);
                      setIdGrupoAlarme(grupo.id);
                    }}
                  >
                    Adicionar Grupo de atuação
                  </button>
                  <button
                    className="excluir"
                    type="button"
                    onClick={() => {
                      setRemoveAssociacao(!removeAssociacao);
                      setIdGrupoAlarme(grupo.id);
                      listOneGrupoAlarme(grupo.id);
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIdGpAlarme(grupo.id);
                    setOpenTipoAlarme(!openTipoAlarme);
                  }}
                >
                  Novo Tipo de Alarme
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  className="btn_add_tipo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIdGpAlarme(grupo.id);
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
            <Icon.XCircleFill
              color="darkorange"
              className="custom-icon"
              onClick={() => {
                setOpenModalExclude(!openModalExclude);
                setGrupoSelecionado(grupo);
              }}
            />
          )}
        </div>
      )}
    </BoxNomeGrupoStl>
  );
}

export default BoxNomeGrupoComponente;
