import { CaminhoStl } from "./styles";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function CaminhoComponent({ path, typeAlarm }) {
  const navigate = useNavigate();

  return (
    <CaminhoStl typeAlarm={typeAlarm}>
      <p className="caminho-str">URA / {path}</p>
      <Icon.DoorOpenFill
        size={30}
        onClick={() => navigate("/home")}
        className="voltar-icon"
      />
    </CaminhoStl>
  );
}

export default CaminhoComponent;
