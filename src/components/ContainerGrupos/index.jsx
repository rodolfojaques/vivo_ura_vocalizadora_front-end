import { ContainerGruposStl } from "./styles";

function ContainerGruposComponente({
    children,
    openModalAlarm,
    setOpenModalAlarm,
    listaGruposAlarmes, 
    setListaGruposAlarmes
}){
    return (
        <ContainerGruposStl>
            <button onClick={()=>setOpenModalAlarm(!openModalAlarm)} className="btn_novoGrupo">Novo Grupo</button>
            <h3 className="str_grup">Grupos <span className="sg">SG-INFRA</span></h3>
            <ul className="list_grupos">{children}</ul>
        </ContainerGruposStl>
    )
}

export default ContainerGruposComponente