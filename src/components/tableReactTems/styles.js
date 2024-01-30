import styled from "styled-components";

export const TableStl = styled.div`
    .tableAlarmesDiv{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    table {
        max-width: 95%;
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
    }

    th{
        background-color: rgba(255,200,0,1);
        color: #f2f2f2;
    }

    th, td {
      border: 2px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    table tr:nth-child(even){
      background-color: #f2f2f2;
    }

    table tr:hover{
        background-color:  rgba(255,200,0,.2);
    }
`