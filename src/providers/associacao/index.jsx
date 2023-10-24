import { useContext } from "react";
import { createContext } from "react";

export const AssociacaoContext = createContext();

function AssociacaoProvider({ children }) {
  return (
    <AssociacaoContext.Provider value={{}}>
      {children}
    </AssociacaoContext.Provider>
  );
}

export default AssociacaoProvider;
