import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { GruposDeAtuacaoStl } from "./styles";

function GruposDeAtuacao(){
    return(
        <GruposDeAtuacaoStl>
            <Header />
            <CaminhoComponent path={"Grupos de Atuação"} />
            Grupos de Atuação
        </GruposDeAtuacaoStl>
    )
}

export default GruposDeAtuacao