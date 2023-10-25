import styled from "styled-components";

export const BoxNomeGrupoStl = styled.li`
  .box1 {
    background-color: blue;
    color: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
    padding: 0.8rem;

    min-width: 10rem;

    hr {
      width: 100%;
    }

    .nome {
      font-weight: 900;
      margin: 0 auto;

      cursor: pointer;
    }

    .ttl_p {
      font-size: x-small;
      font-weight: 600;

      .info_span {
        font-size: 8px;
        font-weight: 500;
      }
    }

    .space_icon {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .custom-icon {
      cursor: pointer;
    }
  }

  .box2 {
    background-color: blue;
    color: white;

    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    padding: 0.8rem;

    width: 10rem;

    .nome {
      font-size: small;
      font-weight: 600;

      cursor: pointer;
    }
  }
  .div_fields_contacts {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .btn_add_tipo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.3rem;

    color: white;
    background-color: darkorange;

    border-style: none;
    border-radius: 5px;

    font-size: small;
    font-weight: 600;

    cursor: pointer;

    &:active {
      opacity: 0.6;
    }
  }
`;

export const DivButtonAddContato = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  button {
    font-family: "Poppins", sans-serif;
    font-size: small;
    font-weight: bold;
    border: none;
    width: 80%;
    height: 28px;
    background-color: darkorange;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  }

  .excluir {
    background-color: red;
  }
`;
