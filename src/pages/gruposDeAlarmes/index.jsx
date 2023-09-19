import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { GruposDeAlarmesStl } from "./styles";

function GruposDeAlarmes(){
    return(
        <GruposDeAlarmesStl>
            <Header />
            <CaminhoComponent path={"Grupos de alarmes"} />
            Grupos de Alarmes
        </GruposDeAlarmesStl>
    )
}

export default GruposDeAlarmes