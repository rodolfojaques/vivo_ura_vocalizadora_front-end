import { useContext } from "react";
import { ContainerGruposStl } from "./styles";
import { UserContext } from "../../providers/user";
import * as Icon from "react-bootstrap-icons";

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

  const { role, openFilterInput, setOpenFilterInput } = useContext(UserContext);

  return (
    <>
      {tipoGrupo === "associacao" ? (
        <ContainerGruposStl>
          <section className="container_SG_DL">{children}</section>
        </ContainerGruposStl>
      ) : (
        <ContainerGruposStl>
          <div className="container">
            <button
              disabled={role}
              onClick={() => openOnclick()}
              className="btn_novoGrupo"
            >
              Novo Grupo
            </button>
            <button
              disabled={role}
              className="btn_novoGrupo btn_filter"
              onClick={()=> setOpenFilterInput(!openFilterInput)}
            >
              <span><b><Icon.Funnel size={20}/></b></span> Filtragem de Entrada TEMS
            </button>                         
          </div>

          <section className="container_SG_DL">{children}</section>
        </ContainerGruposStl>
      )}
    </>
  );
}

export default ContainerGruposComponente;
