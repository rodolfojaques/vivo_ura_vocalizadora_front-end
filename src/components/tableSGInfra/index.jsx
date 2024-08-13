import { useContext, useEffect, useState } from "react";
import { TableStl } from "./styles"
import { ListaDeAlarmesContext } from "../../providers/listaDeAlarmes";

function TableDragSGInfra(){
    const {
        totalItems,
        pageCount,
        filterAlarmes,
        pagSiz, pag, setPag, dataPesq,
        cols, setCols, rows
    } = useContext(ListaDeAlarmesContext)

    const [data, setData] = useState([]);

    const updateData = (newData) => {
        setData(() => newData);
    };

    const handleDragStart = e => {
        const { id } = e.target;
        const idx = cols.indexOf(id);
        e.dataTransfer.setData("colIdx", idx);
    };

    const handleDragOver = e => e.preventDefault();

    const handleOnDrop = e => {
        const { id } = e.target;
        const droppedColIdx = cols.indexOf(id);
        const draggedColIdx = e.dataTransfer.getData("colIdx");
        const tempCols = [...cols];

        tempCols[draggedColIdx] = cols[droppedColIdx];
        tempCols[droppedColIdx] = cols[draggedColIdx];
        setCols(tempCols);
    };

    useEffect(() => {
        filterAlarmes(dataPesq,pag,pagSiz)
        updateData(data)
    }, [pag,pagSiz]);



    return (
        <TableStl>
            <div className="tableAlarmesDiv">
                <table>
                    <thead>
                    <tr>
                        {cols.map((col) => (
                        <th
                            id={col}
                            key={col}
                            draggable
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleOnDrop}
                        >
                            {col}
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row) => (
                        <tr key={row?.id}>
                        {Object.entries(row).map(([k, v], idx) => (
                            k === "ALARME"?
                            <td style={{color:'purple', cursor: 'pointer'}} onClick={()=> alert(row[cols[idx]])} key={v}>
                                {row[cols[idx]]}
                            </td>
                            :
                            <td key={v}>
                                {row[cols[idx]]}
                            </td>
                        ))}
                        </tr>
                    ))}
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

export default TableDragSGInfra