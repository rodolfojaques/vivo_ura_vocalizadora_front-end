import { ListaDLStl } from "./styles";

function ListaDL({ children, grupoAtuacao }) {
  return (
    <ListaDLStl>
      <input type="text" className="pesquisa_dl" placeholder="Pesquisar..." />
      <h3 className="str_grup_dl">
        Grupos {grupoAtuacao ? "de " : null}
        <span className="dl">{grupoAtuacao ? grupoAtuacao : "DL-TEMS"}</span>
      </h3>
      <ul className="list_grupos_dl">{children}</ul>
    </ListaDLStl>
  );
}

export default ListaDL;
