import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CaminhoStl } from "./styles";
import * as Icon from "react-bootstrap-icons"

function CaminhoComponent(){
    const history = useHistory()

    return (
        <CaminhoStl>
            <p className="caminho-str">URA / Lista de Alarmes</p>
            <Icon.DoorOpenFill size={30} onClick={()=> history.push("/home")} className="voltar-icon"/>
        </CaminhoStl>
    )
}

export default CaminhoComponent