import { useContext } from "react";
import { ContainerGruposStl } from "./styles";
import { UserContext } from "../../providers/user";
import { useEffect } from "react";

function ContainerGruposComponente({
  children,
  tipoGrupo,
  openModalAlarm,
  setOpenModalAlarm,
  openModalGruposAtuacao,
  setOpenModalGruposAtuacao,
}) {
  const openOnclick = () => {
    if (tipoGrupo === "alarmes") {
      setOpenModalAlarm(!openModalAlarm);
    } else if (tipoGrupo === "atuação") {
      setOpenModalGruposAtuacao(!openModalGruposAtuacao);
    }
  };

  const { role } = useContext(UserContext);

  return (
    <>
      {tipoGrupo === "associacao" ? (
        <ContainerGruposStl>
          <section className="container_SG_DL">{children}</section>
        </ContainerGruposStl>
      ) : (
        <ContainerGruposStl>
          <button
            disabled={role}
            onClick={() => openOnclick()}
            className="btn_novoGrupo"
          >
            Novo Grupo
          </button>
          <section className="container_SG_DL">{children}</section>
        </ContainerGruposStl>
      )}
    </>
  );
}

export default ContainerGruposComponente;
