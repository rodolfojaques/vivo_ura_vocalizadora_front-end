import { useContext, useEffect, useState } from "react";
import { TableStl } from "./styles"
import axios from "axios";
import { UserContext } from "../../providers/user";
import { ListaDeAlarmesTemsContext } from "../../providers/listaDeAlarmesTems";

function TableTemsComponent({exibirLinhas,total}){
    const {baseURL} = useContext(UserContext)
    const {
        totalItems, setTotalItems,
        pageCount, setPageCount,
        arrAlarm,
        setArrAlarm,
        filterAlarmes,
        pagSiz, pag, setPag, setArrAlarmInit, typeFilter,dataPesq, setDataPesq
    } = useContext(ListaDeAlarmesTemsContext)

    const [data, setData] = useState([]);

    // const dataFilter = {
    //     TIPO_TA: null,
    //     TIPO_REDE:  null,
    //     ESTADO: null,
    //     LOCALIDADE: null,
    //     SITE: null,
    //     TIPO_ALARME: null,
    //     CLASSIFICACAO: null,
    //     DATA_INICIO: null,
    //     DATA_FIM: null,
    // };

    // const fetchData = async (pageNumber, pageSize) => {

    //   try {
    //     const response = await filterAlarmes(dataFilter,pageNumber,pageSize)

    //     console.log(response);
    //     setArrAlarm(response.data);
    //     setArrAlarmInit(response.data)
    //     setPageCount(response.pageCount);
    //     setTotalItems(response.total)
    //   } catch (error) {
    //     console.error('Erro ao buscar dados:', error);
    //   }
    // };

    const updateData = (newData) => {
        setData(() => newData);
    };
  
    useEffect(() => {
    //   fetchData(pag, pagSiz);
        filterAlarmes(dataPesq,pag,pagSiz)
        updateData(data)
    }, [pag, pagSiz]);

    return (
        <TableStl>
            <div className="tableAlarmesDiv">
                <table>
                    <thead>
                        <tr>
                            <th>firstSeen</th>
                            <th>frontTypeTa</th>
                            <th>frontNetworkType</th>
                            <th>estadoSigla</th>
                            <th>localidadeSigla</th>
                            <th>frontAlarmId</th>
                            <th>frontTypeFailure</th>
                            <th>frontPlantType</th>
                            <th>classificacao</th>
                            <th>severity</th>
                            <th>frontSpecificProblem</th>
                            <th>specificProblem</th>
                            <th>frontDomain</th>
                            <th>familia</th>
                            <th>frontProblemCause</th>
                            <th>manager</th>
                            <th>frontVendor</th>
                            <th>identifier</th>
                            <th>lastSeen</th>
                            <th>ta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrAlarm.map(data=><tr>
                            <td>{data.firstSeen}</td>
                            <td>{data.persistent_frontTypeTa}</td>
                            <td>{data.persistent_frontNetworkType}</td>
                            <td>{data.persistent_estadoSigla}</td>
                            <td>{data.persistent_localidadeSigla}</td>
                            <td>{data.persistent_frontAlarmId}</td>
                            <td>{data.persistent_frontTypeFailure}</td>
                            <td>{data.persistent_frontPlantType}</td>
                            <td>{data.persistent_classificacao}</td>
                            <td>{data.severity}</td>
                            <td>{data.persistent_frontSpecificProblem}</td>
                            <td>{data.persistent_specificProblem}</td>
                            <td>{data.persistent_frontDomain}</td>
                            <td>{data.persistent_familia}</td>
                            <td>{data.persistent_frontProblemCause}</td>
                            <td>{data.manager}</td>
                            <td>{data.persistent_frontVendor}</td>
                            <td>{data.identifier}</td>
                            <td>{data.lastSeen}</td>
                            <td>{data.persistent_ta}</td>
                        </tr>)
                        }                        
                    </tbody>
                </table>             
            </div>
            <div> 
                <span>
                    Mostrando {(pag -1) * pagSiz + 1} - {totalItems < pag * pagSiz? totalItems : pag * pagSiz} de {totalItems} linhas
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
