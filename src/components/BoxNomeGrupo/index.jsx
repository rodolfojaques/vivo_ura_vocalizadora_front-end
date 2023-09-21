import { useState } from "react";
import { BoxNomeGrupoStl } from "./styles";
import * as Icon from "react-bootstrap-icons"

function BoxNomeGrupoComponente({
    nome,
    grupo,
    listaGruposAlarmes, 
    setListaGruposAlarmes,
    grupoSelecionado, 
    setGrupoSelecionado,
    openModalExclude, 
    setOpenModalExclude
}){

    const [ openInfos, setOpenInfos ] = useState(false)

    return (
        <BoxNomeGrupoStl>
            {
                !!openInfos?
                <div onClick={()=> setOpenInfos(!openInfos)} className="container_box box1">
                    <p className="nome">{nome}</p>
                    <p className="ttl_p">UF: <span className="info_span">{grupo.UF}</span></p>
                    <p className="ttl_p">Site: <span className="info_span">{grupo.site}</span></p>
                    <p className="ttl_p">Tipo de alarme: <span className="info_span">{grupo.tipoAlarme}</span></p>
                    <p className="ttl_p">Classificação: <span className="info_span">{grupo.classificacao}</span></p>
                    <p className="ttl_p">Localidade: <span className="info_span">{grupo.localidade}</span></p>
                </div>
                :
                <div onClick={()=> setOpenInfos(!openInfos)} className="container_box box2">
                    <p className="nome">{nome}</p>
                    <Icon.XCircleFill color="darkorange" onClick={()=> {
                        setOpenModalExclude(!openModalExclude)
                        setGrupoSelecionado(grupo)
                    }}/>                 
                </div>               
            }
        </BoxNomeGrupoStl>
    )
}

export default BoxNomeGrupoComponente