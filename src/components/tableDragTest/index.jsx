import { useContext, useEffect, useState } from "react";
import { TableStl } from "./styles"
import { ListaDeAlarmesContext } from "../../providers/listaDeAlarmes";

function TableDragTest(){
    const {
        totalItems,
        pageCount,
        arrAlarm,
        filterAlarmes,
        pagSiz, pag, setPag, dataPesq,
        cols, setCols, rows, setRows
    } = useContext(ListaDeAlarmesContext)

    const [data, setData] = useState([]);
    const [dragOver, setDragOver] = useState("");


    const updateData = (newData) => {
        setData(() => newData);
    };

    // const generateData = async () => {
    //     filterAlarmes(dataPesq,pag,pagSiz)

    //     if(arrAlarm.length > 0){
    //         setRows(arrAlarm)
    //         setCols(Object.keys(arrAlarm[0]))
    //     }
    // };

    const handleDragStart = e => {
        const { id } = e.target;
        const idx = cols.indexOf(id);
        e.dataTransfer.setData("colIdx", idx);
    };

    const handleDragOver = e => e.preventDefault();
    const handleDragEnter = e => {
    const { id } = e.target;
    setDragOver(id);
    };

    const handleOnDrop = e => {
    const { id } = e.target;
    const droppedColIdx = cols.indexOf(id);
    const draggedColIdx = e.dataTransfer.getData("colIdx");
    const tempCols = [...cols];

    tempCols[draggedColIdx] = cols[droppedColIdx];
    tempCols[droppedColIdx] = cols[draggedColIdx];
    setCols(tempCols);
    setDragOver("");
    };

    useEffect(() => {
        filterAlarmes(dataPesq,pag,pagSiz)
        updateData(data)
    }, [pag, pagSiz]);



    return (
        <TableStl>
            <div className="tableAlarmesDiv">
                <table>
                    <thead>
                    <tr>
                        {cols.map((col,i) => (
                        <th
                            id={col}
                            key={i}
                            draggable
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleOnDrop}
                            onDragEnter={handleDragEnter}
                            dragover={col === dragOver}
                        >
                            {col}
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map(row => (
                        <tr key={row?.id}>
                        {Object.entries(row).map(([k, v], idx) => (
                            k === "ALARME"?
                            <td style={{color:'purple', cursor: 'pointer'}} onClick={()=> alert(row[cols[idx]])} key={idx} dragover={cols[idx] === dragOver}>
                            {row[cols[idx]]}
                            </td>
                            :
                            <td key={idx} dragover={cols[idx] === dragOver}>
                            {row[cols[idx]]}
                            </td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/* <table>
                    <thead>
                        <tr>
                            <th>Data Apresentação</th>
                            <th>TA</th>
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
                            <th>Fabricante</th>
                            <th>Modelo</th>
                            <th>Salas Afetadas</th>
                            <th>Historico</th>
                            <th>Historico Tipo</th>
                            <th>Tipo Planta</th>
                            <th>Tipo Planta COD</th>
                            <th>Elemento Sigla</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            arrAlarm.map(data=><tr>
                            <td>{data.DATA_APRESENTACAO}</td>
                            <td>{data.TA}</td>
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
                            <td style={{color:'purple', cursor: 'pointer'}} onClick={()=> alert(data.ALARME)}>{data.ALARME}</td>
                            <td>{data.TIPO_FALHA}</td>
                            <td>{data.TIPO_AFETACAO}</td>
                            <td>{data.EQUIPAMENTO}</td>
                            <td>{data.TIPO_CORRENTE_ELETRICA}</td>
                            <td>{data.CAPACIDADE}</td>
                            <td>{data.FABRICANTE}</td>
                            <td>{data.MODELO}</td>
                            <td>{data.SALAS_AFETADAS}</td>
                            <td>{data.HISTORICO}</td>
                            <td>{data.HISTORICO_TIPO}</td>
                            <td>{data.TIPO_PLANTA}</td>
                            <td>{data.TIPO_PLANTA_COD}</td>
                            <td>{data.ELEMENTO_SIGLA}</td>
                        </tr>)
                        }                        
                    </tbody>
                </table>              */}
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

export default TableDragTest