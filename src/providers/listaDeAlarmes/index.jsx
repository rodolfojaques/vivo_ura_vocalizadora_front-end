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

  const [typeFilter, setTypeFilter] = useState("geral")

  const [totalItems, setTotalItems] = useState(20);
  const [pageCount, setPageCount] = useState(0);

  const [dataPesq, setDataPesq] = useState({})

  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);

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
      ULTIMOS_EM: data.ULTIMOS_EM || null,
    };

    const dataFilterSpecific = {
      ALARME: data.ALARME || null,
    };

    try {
      if(typeFilter === "geral"){
        const response = await axios
          .post(`${baseURL}/history-alarmes?page=${page}&size=${pageSize}`, dataFilter, {
            headers: {
              "Content-Type": "application/json",
            },
          }) 
          setArrAlarm(response.data.data)
          setPageCount(response.data.pageCount)
          setTotalItems(response.data.total)

          setCols(Object.keys(response.data.data[0]))
          setRows(response.data.data)

          return response.data        
      } else {
        const response = await axios
          .post(`${baseURL}/history-alarmes/filter?page=${page}&size=${pageSize}`, dataFilterSpecific, {
            headers: {
              "Content-Type": "application/json",
            },
          }) 
          setArrAlarm(response.data.data)
          setPageCount(response.data.pageCount)
          setTotalItems(response.data.total)

          setCols(Object.keys(response.data.data[0]))
          setRows(response.data.data)

          return response.data         
      }

    } catch (error) {
      console.error(error)
      toast.error("Erro ao filtrar alarmes!");
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
        pag, setPag, pagSiz, setPagSiz, linhas, setLinhas, typeFilter, setTypeFilter,
        totalItems, setTotalItems, pageCount, setPageCount, dataPesq, setDataPesq,
        cols, setCols, rows, setRows
      }}
    >
      {children}
    </ListaDeAlarmesContext.Provider>
  );
}

export default ListaDeAlarmesProvider;
