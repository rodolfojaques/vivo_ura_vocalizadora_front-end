import styled from "styled-components";

export const ListaSGStl = styled.section`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;

    width: 49%;

    .pesquisa_sg{
        width: 15rem;
        height: 2rem;
        border-style: none;
        border: solid gray;
        border-radius: 5px;

        padding-left: .5rem;
    }

    .str_grup_sg{
        font-weight: 500;
        margin-left: .5rem;

        .sg{
            font-size: x-small;
            font-weight: 600;
            color: purple;
        }
    }

    .list_grupos_sg{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;

        padding: .5rem;

        height: 58vh;
        width: 100%;

        overflow-x: auto;
        box-shadow: 0 0 2px 0 purple;
        border-radius: 5px 5px 0 0;
    }
`