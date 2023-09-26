import { useEffect, useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import ModalGruposAlarmesComponente from "../../components/ModalGruposAlarmes";
import { GruposDeAlarmesStl } from "./styles";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import ModalExcludeGruposComponent from "../../components/ModalExcludeGrupos";
import ListaSG from "../../components/ListaSG";
import ListaDL from "../../components/ListaDL";
import { gruposAlarmesMock } from "../../utils/grupos";

function GruposDeAlarmes(){
    const [grupoSelecionado, setGrupoSelecionado] = useState({})
    const [openModalAlarm, setOpenModalAlarm] = useState(false)
    const [openModalExclude, setOpenModalExclude] = useState(false)

    const [gruposAlarmes, setGruposAlarmes] = useState([])

    useEffect(()=> {
        setGruposAlarmes(gruposAlarmesMock)
    },[])

    const deleteOnClick = (grp)=> {
        const newList = gruposAlarmes.filter((grupo)=> grupo.id !== grp.id)
        setGruposAlarmes(newList)
    }

    const handleValueChange = (event,arr) => {
        const value = event.target.value || "";
        
        const newListaAlarmes = arr.filter((obj) => {

            if(obj?.nomeGrupo?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.UF?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.site?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.tipoAlarme?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.classificacao?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.localidade?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            }
        })
        setGruposAlarmes(newListaAlarmes)       
    };

    return(
        <GruposDeAlarmesStl>
            <Header />
            <CaminhoComponent path={"Grupos de alarmes"} />
            <ContainerGruposComponente 
            tipoGrupo={"alarmes"}
            openModalAlarm={openModalAlarm} 
            setOpenModalAlarm={setOpenModalAlarm}
            gruposAlarmes={gruposAlarmes}
            setGruposAlarmes={setGruposAlarmes}
            >
                <ListaSG 
                handleValueChange={handleValueChange}
                gruposAlarmes={gruposAlarmes}
                gruposAlarmesMock={gruposAlarmesMock}
                >
                    {
                        gruposAlarmes?
                        gruposAlarmes.map((grupo,i)=> <BoxNomeGrupoComponente
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
                </ListaSG>
                <ListaDL></ListaDL>
            </ContainerGruposComponente>
            {
                !!openModalAlarm?<ModalGruposAlarmesComponente 
                openModalAlarm={openModalAlarm} 
                setOpenModalAlarm={setOpenModalAlarm}
                gruposAlarmes={gruposAlarmes}
                setGruposAlarmes={setGruposAlarmes}
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