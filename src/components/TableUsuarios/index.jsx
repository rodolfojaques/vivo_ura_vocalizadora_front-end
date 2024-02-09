import { useEffect } from "react";
import { TableStl } from "./styles"
import { useTable, usePagination } from "react-table";

function TableUserComponent({columns,data,exibirLinhas}){
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        // rows,
        page, // Itens na página atual
        pageOptions,
        state: { pageIndex, pageSize }, // Estado da paginação
        gotoPage,
        nextPage,
        previousPage,
        setPageSize
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
    );

    useEffect(()=>{
        setPageSize(exibirLinhas || 10)
    },[exibirLinhas,page,pageSize,setPageSize]) 

    return (
        <TableStl>
            <div className="tableAlarmesDiv">
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}{
                                            cell.column.Header == "Perfil" && cell.row.original.typeTeam == "SG"?
                                            <span className="sg"> - SG-INFRA</span>
                                            :
                                            cell.column.Header == "Perfil" && cell.row.original.typeTeam == "DL"?
                                            <span className="dl"> - DL-TEMS</span>:<></>
                                        }</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>                
            </div>
            <div>
                <span>
                    Mostrando {pageIndex * pageSize + 1} - {pageIndex * pageSize + page.length} de {data.length} linhas
                </span>{' '}
                <button className="btnPaginator" onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
                {'<<'}
                </button>{' '}
                <button className="btnPaginator" onClick={() => previousPage()} disabled={pageIndex === 0}>
                {'<'}
                </button>{' '}
                <button className="btnPaginator" onClick={() => nextPage()} disabled={pageIndex === pageOptions.length - 1}>
                {'>'}
                </button>{' '}
                <button className="btnPaginator" onClick={() => gotoPage(pageOptions.length - 1)} disabled={pageIndex === pageOptions.length - 1}>
                {'>>'}
                </button>
            </div>
        </TableStl>
    )
}

export default TableUserComponent