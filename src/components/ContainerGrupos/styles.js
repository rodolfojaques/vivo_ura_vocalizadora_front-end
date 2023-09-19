import styled from "styled-components";

export const ContainerGruposStl = styled.section`

    border: solid gray;
    border-radius: 5px;

    height: 70vh;
    width: 90%;

    margin: 1rem auto 0 auto;
    padding: 1rem;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .btn_novoGrupo{
        border-style: none;
        border-radius: 50px;

        height: 3rem;
        width: 10rem;

        color: white;
        background-color: rgba(0,130,255,1);

        font-size: medium;
        font-weight: bold;

        cursor: pointer;
        &:active{
            opacity: .5;
        }
    }

    .str_grup{
        margin-left: 2.7rem;
        font-weight: 500;
    }
`