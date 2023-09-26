import { ContainerGruposStl } from "./styles";

function ContainerGruposComponente({
    children,
    tipoGrupo,
    openModalAlarm,
    setOpenModalAlarm,
    openModalGruposAtuacao, 
    setOpenModalGruposAtuacao
}){
    const openOnclick = ()=> {
        if(tipoGrupo === "alarmes"){
            setOpenModalAlarm(!openModalAlarm)
        } else if(tipoGrupo === "atuação"){
            setOpenModalGruposAtuacao(!openModalGruposAtuacao)
        }
    }

    return (
        <ContainerGruposStl>
            <button onClick={()=>openOnclick()} className="btn_novoGrupo">Novo Grupo</button>
            <section className="container_SG_DL">
                {children}
            </section>
        </ContainerGruposStl>
    )
}

export default ContainerGruposComponente