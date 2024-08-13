import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../user";
import axios from "axios";
import { toast } from "react-toastify";
import { DtoDL } from "../../utils/pagListaAlarmes/dtos";

export const ListaDeAlarmesTemsContext = createContext();

function ListaDeAlarmesTemsProvider({ children }) {
  const { baseURL } = useContext(UserContext);
  const [arrAlarm, setArrAlarm] = useState([]);
  const [arrAlarmInit, setArrAlarmInit] = useState([]);

  const [pageInd, setPageInd] = useState(0)

  const [linhas, setLinhas] = useState(10);

  const [pag, setPag] = useState(1)
  const [pagSiz, setPagSiz] = useState(10)

  const [typeFilter, setTypeFilter] = useState([])

  const [totalItems, setTotalItems] = useState(20);
  const [pageCount, setPageCount] = useState(0);

  const [dataPesq, setDataPesq] = useState({})

  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);

  const filterAlarmes = async (data, page, pageSize) => {
    const dataFilter = {
      frontTypeTa: data.frontTypeTa || null,
      frontNetworkType: data.frontNetworkType || null,
      estadoSigla: data.estadoSigla || null,
      frontPlantType: data.frontPlantType || null,
      specificProblem: data.specificProblem || null,
      frontAlarmId: data.frontAlarmId || null,
      classificacao: data.classificacao || null,
      DATA_INICIO: data.DATA_INICIO || null,
      DATA_FIM: data.DATA_FIM || null,
      ULTIMOS_EM: data.ULTIMOS_EM || null,
    };

    const dataFilterSpecific = {
      ALARME: data.ALARME || null,
    };

    try {
      if(typeFilter == "geral"){
        const response = await axios
          .post(`${baseURL}/alarmes-tems?page=${page}&size=${pageSize}`, dataFilter, {
            headers: {
              "Content-Type": "application/json",
            },
          }) 
          setArrAlarm(response.data.data)
          setPageCount(response.data.pageCount)
          setTotalItems(response.data.total)
          
          const dto = await DtoDL(response.data.data)
          const cols = [
            "firstSeen",
            "frontTypeTa",
            "frontNetworkType",
            "estadoSigla",
            "localidadeSigla",
            "frontAlarmId",
            "frontTypeFailure",
            "frontPlantType",
            "classificacao",
            "severity",
            "frontSpecificProblem",
            "specificProblem",
            "frontDomain",
            "familia",
            "frontProblemCause",
            "manager",
            "frontVendor",
            "identifier",
            "lastSeen",
            "ta"
          ]

          setCols(cols)
          setRows(dto)
          setPag(response.data.currentPage)

          return response.data        
      } else {
        const response = await axios
          .post(`${baseURL}/alarmes-tems/filter?page=${page}&size=${pageSize}`, dataFilterSpecific, {
            headers: {
              "Content-Type": "application/json",
            },
          }) 
          setArrAlarm(response.data.data)
          setPageCount(response.data.pageCount)
          setTotalItems(response.data.total)
          
          const dto = await DtoDL(response?.data?.data)
          const cols = [
            "firstSeen",
            "frontTypeTa",
            "frontNetworkType",
            "estadoSigla",
            "localidadeSigla",
            "frontAlarmId",
            "frontTypeFailure",
            "frontPlantType",
            "classificacao",
            "severity",
            "frontSpecificProblem",
            "specificProblem",
            "frontDomain",
            "familia",
            "frontProblemCause",
            "manager",
            "frontVendor",
            "identifier",
            "lastSeen",
            "ta"
          ]

          setCols(cols)
          setRows(dto)
          setPag(response.data.currentPage)

          return response.data         
      }

    } catch (error) {
      console.error(error)
      toast.error("Erro ao listar alarmes!");
    }
  };

  return (
    <ListaDeAlarmesTemsContext.Provider
      value={{
        filterAlarmes,
        arrAlarm,
        setArrAlarm,
        arrAlarmInit,
        setArrAlarmInit,
        pageInd, 
        setPageInd,
        pag, setPag, pagSiz, setPagSiz, linhas, setLinhas, typeFilter, setTypeFilter,
        totalItems, setTotalItems, pageCount, setPageCount, dataPesq, setDataPesq, cols, setCols, rows, setRows
      }}
    >
      {children}
    </ListaDeAlarmesTemsContext.Provider>
  );
}

export default ListaDeAlarmesTemsProvider;
