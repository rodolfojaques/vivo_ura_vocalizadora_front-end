import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import { AssociacaoStl } from "./styles";

function Associacao() {
  return (
    <AssociacaoStl>
      <Header />
      <CaminhoComponent path={"Associação"} />
      <ContainerGruposComponente
        tipoGrupo={"associacao"}
      ></ContainerGruposComponente>
    </AssociacaoStl>
  );
}

export default Associacao;
