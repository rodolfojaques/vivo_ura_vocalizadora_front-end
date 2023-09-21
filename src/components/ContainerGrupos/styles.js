import styled from "styled-components";

export const ContainerGruposStl = styled.section`

    border: solid gray;
    border-radius: 5px;

    height: 80vh;
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
        margin-left: 1.3rem;
        font-weight: 500;

        .sg{
            font-size: x-small;
            font-weight: 600;
            color: purple;
        }
    }

    .list_grupos{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;

        padding: .5rem;

        max-height: 62vh;
        max-width: 50%;
        min-width: 10rem;

        overflow-x: auto;
        box-shadow: 0 0 2px 0 purple;
        border-radius: 5px;
    }
`