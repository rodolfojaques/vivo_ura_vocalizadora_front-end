import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import ListaDL from "../../components/ListaDL";
import ListaSG from "../../components/ListaSG";
import { AssociacaoStl } from "./styles";

function Associacao() {
  return (
    <AssociacaoStl>
      <Header />
      <CaminhoComponent path={"Associação"} />
      <ContainerGruposComponente tipoGrupo={"associacao"}>
        <ListaSG tipoPag={"associacao"}></ListaSG>
        <ListaDL></ListaDL>
      </ContainerGruposComponente>
    </AssociacaoStl>
  );
}

export default Associacao;
