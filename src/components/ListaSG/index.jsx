import { ListaSGStl } from "./styles";

function ListaSG({
  children,
  tipoPag,
  handleValueChange,
  gruposAlarmes,
  gruposAtuacaoMock,
}) {
  return (
    <ListaSGStl>
      <input
        type="text"
        className="pesquisa_sg"
        placeholder="Pesquisar..."
        onChange={(event) => {
          tipoPag === "atuação"
            ? handleValueChange(event, gruposAtuacaoMock)
            : handleValueChange(event, gruposAlarmes);
        }}
      />
      <h3 className="str_grup_sg">
        Grupos <span className="sg">SG-INFRA</span>
      </h3>
      <ul className="list_grupos_sg">{children}</ul>
    </ListaSGStl>
  );
}

export default ListaSG;
