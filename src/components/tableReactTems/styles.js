import styled from "styled-components";

export const TableStl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 30px;
    padding-right: 30px;

    margin-bottom: 2rem;

    .tableAlarmesDiv{
        
        width: 100%;

        overflow-y: auto;
        overflow-x: auto;

        box-shadow: 0 0 5px 0 darkgoldenrod;
    }

    table {
        border-collapse: collapse;
        min-width: 100%;
    }

    th{
        background-color: rgba(255,200,0,1);
        color: #f2f2f2;
    }

    th, td {
        border: 2px solid #dddddd;
        text-align: left;
        padding: 8px;


        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        font-size: small;

        height: 3rem;
    }

    tr{
        height: 3rem;
    }

    table tr:nth-child(even){
      background-color: #f2f2f2;
    }

    table tr:hover{
        background-color:  rgba(255,200,0,.2);
    }

    .btnPaginator{
        background-color: white;
        color:  rgba(255,200,0,1);

        border-style: none;
        border-radius: 5px;
        box-shadow: 0 0 1px 0  rgba(255,200,0,1);

        font-weight: 600;
        font-size: small;

        width: 1.3rem;
        height: 1.3rem;

        cursor: pointer;
        &:disabled{
            opacity: .5;
        }
    }

    .fundo{
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0,0,0,0.5);
        color: purple;
    }

`