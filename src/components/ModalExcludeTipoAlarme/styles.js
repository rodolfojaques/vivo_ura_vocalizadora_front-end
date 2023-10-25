import styled from "styled-components";

export const ModalExcludeTipoAlarmesStl = styled.div`
  border: solid gray;
  border-radius: 5px;

  background-color: white;

  position: fixed;
  top: 18rem;
  left: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  padding: 0.5rem;

  h2 {
    font-size: medium;
  }

  .tipos {
    height: 2rem;

    padding-left: 0.5rem;

    border-style: none;
    border: solid gray;
    border-radius: 5px;
  }

  .btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    .btn {
      border-style: none;
      border-radius: 5px;
      cursor: pointer;

      width: 5rem;
      height: 1.7rem;

      color: white;

      &:active {
        opacity: 0.5;
      }
    }

    .voltar {
      background-color: gray;
    }

    .excluir {
      background-color: red;
    }

    .adicionar {
      background-color: green;
    }
  }
`;
