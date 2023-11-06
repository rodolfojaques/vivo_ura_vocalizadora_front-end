import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../user";
import axios from "axios";
import { toast } from "react-toastify";

export const ListaDeAlarmesContext = createContext();

function ListaDeAlarmesProvider({ children }) {
  const { baseURL, usuario } = useContext(UserContext);
  const [arrAlarm, setArrAlarm] = useState([]);
  const [arrAlarmInit, setArrAlarmInit] = useState([]);
  const filterAlarmes = (data) => {
    const dataFilter = {
      TIPO_TA: data.TIPO_TA || null,
      TIPO_REDE: data.TIPO_REDE || null,
      ESTADO: data.ESTADO || null,
      LOCALIDADE: data.LOCALIDADE || null,
      SITE: data.SITE || null,
      TIPO_ALARME: data.TIPO_ALARME || null,
      CLASSIFICACAO: data.CLASSIFICACAO || null,
      DATA_INICIO: data.DATA_INICIO || null,
      DATA_FIM: data.DATA_FIM || null,
    };

    axios
      .post(`${baseURL}/history-alarmes`, dataFilter, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setArrAlarm(res.data);
        setArrAlarmInit(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ListaDeAlarmesContext.Provider
      value={{
        filterAlarmes,
        arrAlarm,
        setArrAlarm,
        arrAlarmInit,
        setArrAlarmInit,
      }}
    >
      {children}
    </ListaDeAlarmesContext.Provider>
  );
}

export default ListaDeAlarmesProvider;
