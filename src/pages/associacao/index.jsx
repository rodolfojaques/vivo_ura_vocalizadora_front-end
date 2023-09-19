import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { AssociacaoStl } from "./styles";

function Associacao(){
    return(
        <AssociacaoStl>
            <Header />
            <CaminhoComponent path={"Associação"} />
            Associação
        </AssociacaoStl>
    )
}

export default Associacao