import styled from "styled-components";

export const TableStl = styled.div`

    display: flex;
    flex-direction: column;
    gap: .5rem;

    margin-bottom: 2rem;

    .tableAlarmesDiv{

        overflow-y: hidden;
        overflow-x: scroll;

    }

    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        
        tr{
            text-align: left;
            display: flex;
            min-height: 2.4rem;
        }

        tbody{
            tr{

                td{
                    white-space: nowrap;
                    width: 12rem;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    font-size: small;
                }                
            }
        }

    }
    table td, table th {
        border: 1px solid #ddd;
        padding: 8px;
        min-width: 12rem;

        

    }

    table tr:nth-child(even){
        background-color: #f2f2f2;
    }

    table tr:hover {
        background-color: #f0ddee;
    }

    table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: purple;
        color: white;
    }

    .btnPaginator{
        background-color: white;
        color: purple;

        border-style: none;
        border-radius: 5px;
        box-shadow: 0 0 1px 0 purple;

        font-weight: 600;
        font-size: small;

        width: 1.3rem;
        height: 1.3rem;

        cursor: pointer;
    }
`