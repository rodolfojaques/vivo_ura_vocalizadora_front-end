import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../user";
import axios from "axios";
import { toast } from "react-toastify";

export const ListaDeAlarmesContext = createContext();

function ListaDeAlarmesProvider({ children }) {
  return (
    <ListaDeAlarmesContext.Provider value={{}}>
      {children}
    </ListaDeAlarmesContext.Provider>
  );
}

export default ListaDeAlarmesProvider;
