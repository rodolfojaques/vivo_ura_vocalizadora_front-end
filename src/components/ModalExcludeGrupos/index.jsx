import { useContext } from "react";
import { BackgroundStl, ModalExcludeStl } from "./styles";
import { GrupoAtuacaoContext } from "../../providers/gruposAtuacao";

function ModalExcludeGruposComponent({
  grupo,
  openModalExclude,
  setOpenModalExclude,
  deleteOnClick,
}) {
  const { deleteUser, setDeleteUser, nameUserAndRe, deleteUserReq } =
    useContext(GrupoAtuacaoContext);

  return (
    <>
      {deleteUser ? (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setDeleteUser(!deleteUser)}}>
          <ModalExcludeStl>
            <h2 className="atencao">Atenção</h2>
            <p className="txt_exclude">
              Você tem certeza que deseja excluir<br></br>o usuario{" "}
              <span className="nome_grupo">{`${nameUserAndRe.nome}, RE: ${nameUserAndRe.RE}`}</span>
            </p>
            <div className="btns">
              <button
                onClick={() => setDeleteUser(!deleteUser)}
                className="btn voltar"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  setDeleteUser(!deleteUser);
                  deleteUserReq(nameUserAndRe.id, nameUserAndRe.grupo);
                }}
                className="btn excluir"
              >
                Excluir
              </button>
            </div>
          </ModalExcludeStl>
        </BackgroundStl>
      ) : (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenModalExclude(!openModalExclude)}}>
          <ModalExcludeStl>
            <h2 className="atencao">Atenção</h2>
            <p className="txt_exclude">
              Você tem certeza que deseja excluir<br></br>o grupo{" "}
              <span className="nome_grupo"> {grupo.nomeGrupo}</span>?
            </p>
            <div className="btns">
              <button
                onClick={() => setOpenModalExclude(!openModalExclude)}
                className="btn voltar"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  deleteOnClick(grupo);
                  setOpenModalExclude(!openModalExclude);
                }}
                className="btn excluir"
              >
                Excluir
              </button>
            </div>
          </ModalExcludeStl>
        </BackgroundStl>
      )}      
    </>
  );
}

export default ModalExcludeGruposComponent;
