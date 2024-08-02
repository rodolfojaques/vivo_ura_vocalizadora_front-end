import { useContext, useState } from "react";
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

  const { role, openFilterInput, setOpenFilterInput, openCargaMassiva, setOpenCargaMassiva, openCargaMassivaDL, setOpenCargaMassivaDL } = useContext(UserContext);

  const [openTransformBtnCargaMassiva, setOpenTransformBtnCargaMassiva] = useState(false)

  return (
    <>
      {tipoGrupo === "associacao" ? (
        <ContainerGruposStl>
          <section className="container_SG_DL">{children}</section>
        </ContainerGruposStl>
      ) : (
        <ContainerGruposStl>
          
          {
            tipoGrupo === "alarmes" ? 
            <div className="container">
              <button
                disabled={role}
                onClick={() => openOnclick()}
                className="btn_novoGrupo"
              >
                Novo Grupo
              </button>
              {
                openTransformBtnCargaMassiva?
                <div className="div_cargaMassiva"
                  onPointerLeave={() => setOpenTransformBtnCargaMassiva(!openTransformBtnCargaMassiva)}
                >
                  <button className="cm cm_sg"
                    disabled={role}
                    onClick={() => setOpenCargaMassiva(!openCargaMassiva)}
                  >
                    SG-Infra
                  </button>
                  <button className="cm cm_dl"
                    disabled={role}
                    onClick={() => setOpenCargaMassivaDL(!openCargaMassivaDL)}
                  >
                    DL-TEMS
                  </button>
                </div>
                :
                <button
                  disabled={role}
                  onClick={() => ""}
                  className="btn_cargaMassiva"
                  onPointerEnter={() => setOpenTransformBtnCargaMassiva(!openTransformBtnCargaMassiva)}
                >
                  Carga Massiva
                </button>                
              }

              <button
                disabled={role}
                className="btn_novoGrupo btn_filter"
                onClick={()=> setOpenFilterInput(!openFilterInput)}
              >
                <span><b><Icon.Funnel size={20}/></b></span> Filtragem de Entrada TEMS
              </button>                         
            </div>
            :
            <div className="container">
              <button
                disabled={role}
                onClick={() => openOnclick()}
                className="btn_novoGrupo"
              >
                Novo Grupo
              </button>                        
            </div>

          }
          <section className="container_SG_DL">{children}</section>
        </ContainerGruposStl>
      )}
    </>
  );
}

export default ContainerGruposComponente;
