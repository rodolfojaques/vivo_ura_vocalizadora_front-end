import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import { GruposDeAlarmesStl } from "./styles";

function GruposDeAlarmes(){
    return(
        <GruposDeAlarmesStl>
            <Header />
            <CaminhoComponent path={"Grupos de alarmes"} />
            <ContainerGruposComponente />
        </GruposDeAlarmesStl>
    )
}

export default GruposDeAlarmes