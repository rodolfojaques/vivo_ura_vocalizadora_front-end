import styled from "styled-components";

export const CaminhoStl = styled.section`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;

    background-color: rgb(128, 0, 128, .5);
    color: lightgray;

    font-size: larger;
    font-weight: 500;

    .voltar-icon{
        cursor: pointer;

        &:hover{
            color: aqua;
        }
    }
`