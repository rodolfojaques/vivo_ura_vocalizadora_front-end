import { ListaDLStl } from "./styles";

function ListaDL({
  children,
  grupoAtuacao,
  handleValueChange,
  grupoAtuacaoInicial,
}) {
  return (
    <>
      {grupoAtuacao === "ATUAÇÃO" ? (
        <ListaDLStl>
          <input
            type="text"
            className="pesquisa_dl"
            placeholder="Pesquisar..."
            onChange={(event) => {
              handleValueChange(event);
            }}
          />
          <h3 className="str_grup_dl">
            Grupos de <span className="dl">{grupoAtuacao}</span>
          </h3>
          <ul className="list_grupos_dl">{children}</ul>
        </ListaDLStl>
      ) : (
        <ListaDLStl>
          <input
            type="text"
            className="pesquisa_dl"
            placeholder="Pesquisar..."
            onChange={(event) => {
              handleValueChange(event);
            }}
          />
          <h3 className="str_grup_dl">
            Grupos <span className="dl">DL-TEMS</span>
          </h3>
          <ul className="list_grupos_dl">{children}</ul>
        </ListaDLStl>
      )}
    </>
  );
}

export default ListaDL;
