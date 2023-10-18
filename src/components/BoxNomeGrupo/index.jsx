import { useState } from "react";
import { BoxNomeGrupoStl, DivButtonAddContato } from "./styles";
import * as Icon from "react-bootstrap-icons";

function BoxNomeGrupoComponente({
  nome,
  grupo,
  tipoGrupo,
  listaGruposAlarmes,
  setListaGruposAlarmes,
  grupoSelecionado,
  setGrupoSelecionado,
  openModalExclude,
  setOpenModalExclude,
}) {
  const [openInfos, setOpenInfos] = useState(false);

  return (
    <BoxNomeGrupoStl>
      {!!openInfos ? (
        tipoGrupo === "atuação" ? (
          <div
            onClick={() => setOpenInfos(!openInfos)}
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
                  <p className="ttl_p">
                    Contato 3: <span className="info_span">{elem.nome}</span>
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
            <DivButtonAddContato>
              <button type="button">Adicionar Contato</button>
            </DivButtonAddContato>
          </div>
        ) : (
          <div
            onClick={() => setOpenInfos(!openInfos)}
            className="container_box box1"
          >
            <p className="nome">{nome}</p>
            <p className="ttl_p">
              UF: <span className="info_span">{grupo.UF}</span>
            </p>
            <p className="ttl_p">
              Site: <span className="info_span">{grupo.site}</span>
            </p>
            <p className="ttl_p">
              Tipo de alarme:{" "}
              <span className="info_span">{grupo.tipoAlarme}</span>
            </p>
            <p className="ttl_p">
              Classificação:{" "}
              <span className="info_span">{grupo.classificacao}</span>
            </p>
            <p className="ttl_p">
              Localidade: <span className="info_span">{grupo.localidade}</span>
            </p>
          </div>
        )
      ) : (
        <div className="container_box box2">
          <p onClick={() => setOpenInfos(!openInfos)} className="nome">
            {nome}
          </p>
          <Icon.XCircleFill
            color="darkorange"
            onClick={() => {
              setOpenModalExclude(!openModalExclude);
              setGrupoSelecionado(grupo);
            }}
          />
        </div>
      )}
    </BoxNomeGrupoStl>
  );
}

export default BoxNomeGrupoComponente;
