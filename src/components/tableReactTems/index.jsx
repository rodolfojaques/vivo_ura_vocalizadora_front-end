import { useContext, useEffect, useState } from "react";
import { TableStl } from "./styles"
import axios from "axios";
import { UserContext } from "../../providers/user";
import { ListaDeAlarmesTemsContext } from "../../providers/listaDeAlarmesTems";

function TableTemsComponent({exibirLinhas,total}){
    const {baseURL} = useContext(UserContext)
    const {
        pageInd, 
        setPageInd,
        arrAlarm,
        setArrAlarm,
        filterAlarmes,
        pagSiz, setPagSiz, pag, setPag, setArrAlarmInit
    } = useContext(ListaDeAlarmesTemsContext)

    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizes, setPageSizes] = useState(10);

    const [totalItems, setTotalItems] = useState(20);

    const dataFilter = {
        TIPO_TA: null,
        TIPO_REDE:  null,
        ESTADO: null,
        LOCALIDADE: null,
        SITE: null,
        TIPO_ALARME: null,
        CLASSIFICACAO: null,
        DATA_INICIO: null,
        DATA_FIM: null,
    };

    const fetchData = async (pageNumber, pageSize) => {

      try {
        const response = await filterAlarmes(dataFilter,pageNumber,pageSize)

        console.log(response);
        setArrAlarm(response.data);
        setArrAlarmInit(response.data)
        setPageCount(response.pageCount);
        setTotalItems(response.total)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    const updateData = (newData) => {
        setData(() => newData);
    };
  
    useEffect(() => {
      fetchData(pag, pagSiz);
      updateData(data)
      console.log(pag);
    }, [pag, pagSiz]);

    return (
        <TableStl>
            <div className="tableAlarmesDiv">
                <table>
                    <thead>
                        <tr>
                            <th>TA</th>
                            <th>APRESENTAÇÃO</th>
                            <th>TIPO DE ALARME</th>
                            <th>SITE</th>
                            <th>CLASSIFICAÇÃO</th>
                            <th>TIPO DE PLANTA</th>
                            <th>ESTADO</th>
                            <th>LOCALIDADE</th>
                            <th>MUNICIPIO</th>
                            <th>TIPO DE REDE</th>
                            <th>TIPO DE TA</th>
                            <th>DESCRIÇÃO</th>
                            <th>SISTEMA_ORIGEM</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrAlarm.map(data=><tr>
                            <td>{data.TA}</td>
                            <td>{data.DATA_APRESENTACAO}</td>
                            <td>{data.TIPO_ALARME}</td>
                            <td>{data.SITE}</td>
                            <td>{data.CLASSIFICACAO}</td>
                            <td>{data.TIPO_PLANTA}</td>
                            <td>{data.ESTADO}</td>
                            <td>{data.LOCALIDADE}</td>
                            <td>{data.MUNICIPIO}</td>
                            <td>{data.TIPO_REDE}</td>
                            <td>{data.TIPO_TA}</td>
                            <td>{data.DESCRICAO}</td>
                            <td>{data.SISTEMA_ORIGEM}</td>
                            <td>{data.STATUS}</td>
                        </tr>)
                        }                        
                    </tbody>
                </table>             
            </div>
            <div> 
                <span>
                    Mostrando {(pag -1) * pagSiz + 1} - {(totalItems < pagSiz? totalItems : pag * pagSiz)} de {totalItems} linhas
                </span>{' '}
                <button className="btnPaginator" onClick={() => setPag(1)} disabled={pag <= 1}>
                {'<<'}
                </button>{' '}
                <button className="btnPaginator" onClick={() => {
                    setPag(pag - 1);
                }} disabled={pag === 1}>
                {'<'}
                </button>{' '}
                <button className="btnPaginator" onClick={() => {
                    setPag(pag + 1);
                }} disabled={pag === pageCount}>
                {'>'}
                </button>{' '}
                <button className="btnPaginator" onClick={() => setPag(pageCount)} disabled={pag >= pageCount}>
                {'>>'}
                </button>
            </div>
        </TableStl>
    )
}

export default TableTemsComponent
