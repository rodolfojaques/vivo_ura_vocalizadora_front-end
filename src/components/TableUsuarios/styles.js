import styled from "styled-components";

export const TableStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 30px;
  padding-right: 30px;

  margin-bottom: 2rem;

  .tableAlarmesDiv {
    overflow-y: hidden;
  }

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    /* width: 100%; */
    margin: 0px auto;

    tr {
      text-align: center;
      display: flex;
      min-height: 2.4rem;
    }

    tbody {
      tr {
        td {
          white-space: nowrap;
          min-width: 15rem;
          overflow: hidden;
          text-overflow: ellipsis;

          font-size: small;

          span {
            cursor: pointer;
          }
        }
      }
    }
  }
  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    min-width: 15rem;
  }

  table tr:nth-child(even) {
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

  .btnPaginator {
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
`;
