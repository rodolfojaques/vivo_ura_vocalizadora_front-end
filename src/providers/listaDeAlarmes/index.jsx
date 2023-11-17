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

  const [pageInd, setPageInd] = useState(0)

  const [linhas, setLinhas] = useState(10);

  const [pag, setPag] = useState(1)
  const [pagSiz, setPagSiz] = useState(10)

  const filterAlarmes = async (data, page, pageSize) => {
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
    console.log(dataFilter);

    try {
      const response = await axios
        .post(`${baseURL}/history-alarmes?page=${page}&size=${pageSize}`, dataFilter, {
          headers: {
            "Content-Type": "application/json",
          },
        }) 
        setArrAlarm(response.data.data)
        console.log(response)
        return response.data
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <ListaDeAlarmesContext.Provider
      value={{
        filterAlarmes,
        arrAlarm,
        setArrAlarm,
        arrAlarmInit,
        setArrAlarmInit,
        pageInd, 
        setPageInd,
        pag, setPag, pagSiz, setPagSiz, linhas, setLinhas
      }}
    >
      {children}
    </ListaDeAlarmesContext.Provider>
  );
}

export default ListaDeAlarmesProvider;
