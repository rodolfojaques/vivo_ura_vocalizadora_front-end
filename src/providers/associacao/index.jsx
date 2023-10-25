import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AssociacaoContext = createContext();

function AssociacaoProvider({ children }) {
  const [grupoAssociacaoAdd, setGrupoAssociacaoAdd] = useState(false);
  const [grupoAtuacaoAss, setGrupoAtuacaoAss] = useState([]);
  return (
    <AssociacaoContext.Provider
      value={{
        grupoAssociacaoAdd,
        setGrupoAssociacaoAdd,
        grupoAtuacaoAss,
        setGrupoAtuacaoAss,
      }}
    >
      {children}
    </AssociacaoContext.Provider>
  );
}

export default AssociacaoProvider;
