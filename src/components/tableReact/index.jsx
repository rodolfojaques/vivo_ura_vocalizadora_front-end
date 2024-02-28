import { useContext, useEffect, useMemo, useState } from "react";
import { TableStl } from "./styles"
import { useTable, usePagination } from "react-table";
import { ListaDeAlarmesContext } from "../../providers/listaDeAlarmes";
import axios from "axios";
import { UserContext } from "../../providers/user";

function TableComponent({columns,exibirLinhas,total}){
    const {baseURL} = useContext(UserContext)
    const {
        totalItems, setTotalItems,
        pageCount, setPageCount,
        arrAlarm,
        setArrAlarm,
        filterAlarmes,
        pagSiz, pag, setPag, setArrAlarmInit, typeFilter,dataPesq, setDataPesq
    } = useContext(ListaDeAlarmesContext)

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizes, setPageSizes] = useState(10);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        // rows,
        page,
        pageOptions,
        state: { pageIndex, pageSize },
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable({
        columns,
        data: arrAlarm,
        initialState: { pageIndex: currentPage, pageSize: pageSizes },
    },
    usePagination
    );

    const dataFilter = 
    typeFilter === 'geral'?
    {
        TIPO_TA: null,
        TIPO_REDE:  null,
        ESTADO: null,
        LOCALIDADE: null,
        SITE: null,
        TIPO_ALARME: null,
        CLASSIFICACAO: null,
        DATA_INICIO: null,
        DATA_FIM: null,
    } : {
        ALARME: null
    };

    // const fetchData = async (pageNumber, pageSize) => {

    //   try {
    //     const response = await filterAlarmes(dataFilter,pageNumber,pageSize)

    //     console.log(response.total);
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
                            <th>Tipo TA</th>
                            <th>Tipo Rede</th>
                            <th>Estado</th>
                            <th>Localidade</th>
                            <th>Site</th>
                            <th>Tipo Alarme</th>
                            <th>Classificação</th>
                            <th>ID Evento</th>
                            <th>ID Equipamento</th>
                            <th>RPA Status</th>
                            <th>SIGITM Fluxo</th>
                            <th>Tipo Bilhete</th>
                            <th>Tipo Rede COD</th>
                            <th>Tipo Rede COD INT</th>
                            <th>Localidade COD</th>
                            <th>Municipio</th>
                            <th>ID Site</th>
                            <th>Sequencia Alarme</th>
                            <th>Empresa Manutenção</th>
                            <th>Alarme</th>
                            <th>Tipo Falha</th>
                            <th>Tipo Afetação</th>
                            <th>Equipamento</th>
                            <th>Tipo Corrente Eletrica</th>
                            <th>Capacidade</th>
                            <th>Data Apresentação</th>
                            <th>Fabricante</th>
                            <th>Modelo</th>
                            <th>Salas Afetadas</th>
                            <th>Historico</th>
                            <th>Historico Tipo</th>
                            <th>Tipo Planta</th>
                            <th>Tipo Planta COD</th>
                            <th>TA</th>
                            <th>Elemento Sigla</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            arrAlarm.map(data=><tr>
                            <td>{data.TIPO_TA}</td>
                            <td>{data.TIPO_REDE}</td>
                            <td>{data.ESTADO}</td>
                            <td>{data.LOCALIDADE}</td>
                            <td>{data.SITE}</td>
                            <td>{data.TIPO_ALARME}</td>
                            <td>{data.CLASSIFICACAO}</td>
                            <td>{data.ID_EVENTO}</td>
                            <td>{data.ID_EQUIPAMENTO}</td>
                            <td>{data.RPA_STATUS}</td>
                            <td>{data.SIGITM_FLUXO}</td>
                            <td>{data.TIPO_BILHETE}</td>
                            <td>{data.TIPO_REDE_COD}</td>
                            <td>{data.TIPO_REDE_COD_INT}</td>
                            <td>{data.LOCALIDADE_COD}</td>
                            <td>{data.MUNICIPIO}</td>
                            <td>{data.ID_SITE}</td>
                            <td>{data.SEQUENCIA_ALARME}</td>
                            <td>{data.EMPRESA_MANUTENCAO}</td>
                            <td>{data.ALARME}</td>
                            <td>{data.TIPO_FALHA}</td>
                            <td>{data.TIPO_AFETACAO}</td>
                            <td>{data.EQUIPAMENTO}</td>
                            <td>{data.TIPO_CORRENTE_ELETRICA}</td>
                            <td>{data.CAPACIDADE}</td>
                            <td>{data.DATA_APRESENTACAO}</td>
                            <td>{data.FABRICANTE}</td>
                            <td>{data.MODELO}</td>
                            <td>{data.SALAS_AFETADAS}</td>
                            <td>{data.HISTORICO}</td>
                            <td>{data.HISTORICO_TIPO}</td>
                            <td>{data.TIPO_PLANTA}</td>
                            <td>{data.TIPO_PLANTA_COD}</td>
                            <td>{data.TA}</td>
                            <td>{data.ELEMENTO_SIGLA}</td>
                        </tr>)
                        }                        
                    </tbody>
                </table>             
            </div>
            <div> 
                <span>
                    Mostrando {(pag -1) * pagSiz + 1} - {pag * pagSiz} de {totalItems} linhas
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

export default TableComponent