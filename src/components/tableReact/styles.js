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
    }

    table {
        border-collapse: collapse;
        margin-top: 20px;

        border: solid greenyellow;
        min-width: 100%;
    }

    th{
        background-color: purple;
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

        max-width: 30rem;
    }

    tr{
        height: 3rem;
    }

    table tr:nth-child(even){
      background-color: #f2f2f2;
    }

    table tr:hover{
        background-color: #f0ddee;
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

        &:disabled{
            opacity: .5;
        }
    }
`