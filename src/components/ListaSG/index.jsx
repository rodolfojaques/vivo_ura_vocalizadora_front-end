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
  gruposAlarmesMock,
  gruposAtuacaoMock,
}) {
  return (
    <>
      {tipoPag === "associacao" ? (
        <ListaSGStl>
          <input
            type="text"
            className="pesquisa_sg"
            placeholder="Pesquisar..."
          />
          <h3 className="str_grup_sg">
            Grupos de <span className="sg">ALARMES</span>
          </h3>
          <ul className="list_grupos_sg">{children}</ul>
        </ListaSGStl>
      ) : (
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
      )}
    </>
  );
}

export default ListaSG;
