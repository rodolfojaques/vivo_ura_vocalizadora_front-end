import { useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import ModalGruposAlarmesComponente from "../../components/ModalGruposAlarmes";
import { GruposDeAlarmesStl } from "./styles";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import ModalExcludeGruposComponent from "../../components/ModalExcludeGrupos";

function GruposDeAlarmes(){
    const [grupoSelecionado, setGrupoSelecionado] = useState({})
    const [openModalAlarm, setOpenModalAlarm] = useState(false)
    const [openModalExclude, setOpenModalExclude] = useState(false)
    const [listaGruposAlarmes, setListaGruposAlarmes] = useState([])

    const deleteOnClick = (grp)=> {
        const newList = listaGruposAlarmes.filter((grupo)=> grupo.id !== grp.id)
        setListaGruposAlarmes(newList)
    }

    return(
        <GruposDeAlarmesStl>
            <Header />
            <CaminhoComponent path={"Grupos de alarmes"} />
            <ContainerGruposComponente 
            openModalAlarm={openModalAlarm} 
            setOpenModalAlarm={setOpenModalAlarm}
            listaGruposAlarmes={listaGruposAlarmes}
            setListaGruposAlarmes={setListaGruposAlarmes}
            >
                {
                    listaGruposAlarmes?
                    listaGruposAlarmes.map((grupo,i)=> <BoxNomeGrupoComponente
                    key={i} 
                    nome={grupo.nomeGrupo} 
                    grupo={grupo}
                    grupoSelecionado={grupoSelecionado}
                    setGrupoSelecionado={setGrupoSelecionado}
                    openModalExclude={openModalExclude}
                    setOpenModalExclude={setOpenModalExclude}
                    />)
                    :<></>
                }
            </ContainerGruposComponente>
            {
                !!openModalAlarm?<ModalGruposAlarmesComponente 
                openModalAlarm={openModalAlarm} 
                setOpenModalAlarm={setOpenModalAlarm}
                listaGruposAlarmes={listaGruposAlarmes}
                setListaGruposAlarmes={setListaGruposAlarmes}
                />:<></>
            }
            {
                !!openModalExclude?<ModalExcludeGruposComponent
                deleteOnClick={deleteOnClick} 
                openModalExclude={openModalExclude}  
                setOpenModalExclude={setOpenModalExclude}
                grupo={grupoSelecionado}              
                /> : <></>
            }            
        </GruposDeAlarmesStl>
    )
}

export default GruposDeAlarmes