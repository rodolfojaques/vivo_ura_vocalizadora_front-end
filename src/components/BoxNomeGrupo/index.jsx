import { useState } from "react";
import { BoxNomeGrupoStl } from "./styles";
import * as Icon from "react-bootstrap-icons"

function BoxNomeGrupoComponente({
    nome,
    grupo,
    tipoGrupo,
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
                    tipoGrupo === "atuação"? 
                    <div onClick={()=> setOpenInfos(!openInfos)} className="container_box box1">
                        <p className="nome">{nome}</p>
                        <p className="ttl_p">Nome 1: <span className="info_span">{grupo.nome1}</span></p>
                        <p className="ttl_p">Contato 1: <span className="info_span">{grupo.contato1}</span></p>
                        <p className="ttl_p">RE 1: <span className="info_span">{grupo.RE1}</span></p>
                        <p className="ttl_p">Cargo 1: <span className="info_span">{grupo.cargo1}</span></p>
                        <hr />
                        <p className="ttl_p">Nome 2: <span className="info_span">{grupo.nome2}</span></p>
                        <p className="ttl_p">Contato 2: <span className="info_span">{grupo.contato2}</span></p>
                        <p className="ttl_p">RE 2: <span className="info_span">{grupo.RE2}</span></p>
                        <p className="ttl_p">Cargo 2: <span className="info_span">{grupo.cargo2}</span></p>
                        <hr />
                        <p className="ttl_p">Nome 3: <span className="info_span">{grupo.nome3}</span></p>
                        <p className="ttl_p">Contato 3: <span className="info_span">{grupo.contato3}</span></p>
                        <p className="ttl_p">RE 3: <span className="info_span">{grupo.RE3}</span></p>
                        <p className="ttl_p">Cargo 3: <span className="info_span">{grupo.cargo3}</span></p>
                        <hr />
                        <p className="ttl_p">Nome 4: <span className="info_span">{grupo.nome4}</span></p>
                        <p className="ttl_p">Contato 4: <span className="info_span">{grupo.contato4}</span></p>
                        <p className="ttl_p">RE 4: <span className="info_span">{grupo.RE4}</span></p>
                        <p className="ttl_p">Cargo 4: <span className="info_span">{grupo.cargo4}</span></p>
                        <hr />
                        <p className="ttl_p">Nome 5: <span className="info_span">{grupo.nome5}</span></p>
                        <p className="ttl_p">Contato 5: <span className="info_span">{grupo.contato5}</span></p>
                        <p className="ttl_p">RE 5: <span className="info_span">{grupo.RE5}</span></p>
                        <p className="ttl_p">Cargo 5: <span className="info_span">{grupo.cargo5}</span></p>
                    </div>
                    :
                    <div onClick={()=> setOpenInfos(!openInfos)} className="container_box box1">
                        <p className="nome">{nome}</p>
                        <p className="ttl_p">UF: <span className="info_span">{grupo.UF}</span></p>
                        <p className="ttl_p">Site: <span className="info_span">{grupo.site}</span></p>
                        <p className="ttl_p">Tipo de alarme: <span className="info_span">{grupo.tipoAlarme}</span></p>
                        <p className="ttl_p">Classificação: <span className="info_span">{grupo.classificacao}</span></p>
                        <p className="ttl_p">Localidade: <span className="info_span">{grupo.localidade}</span></p>
                    </div>
                :
                <div className="container_box box2">
                    <p onClick={()=> setOpenInfos(!openInfos)} className="nome">{nome}</p>
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