import { ContainerGruposStl } from "./styles";

function ContainerGruposComponente({
    children,
    openModalAlarm,
    setOpenModalAlarm,
    gruposAlarmes, 
    setGruposAlarmes
}){
    return (
        <ContainerGruposStl>
            <button onClick={()=>setOpenModalAlarm(!openModalAlarm)} className="btn_novoGrupo">Novo Grupo</button>
            <section className="container_SG_DL">
                {children}
            </section>
        </ContainerGruposStl>
    )
}

export default ContainerGruposComponente