import styled from "styled-components";

export const ListaDLStl = styled.section`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: .5rem;

width: 49%;

    .pesquisa_dl{
        width: 15rem;
        height: 2rem;
        border-style: none;
        border: solid gray;
        border-radius: 5px;

        padding-left: .5rem;
    }

.str_grup_dl{
    margin-left: .5rem;
    font-weight: 500;

    .dl{
        font-size: x-small;
        font-weight: 600;
        color: rgba(255,200,0,1);
    }
}

.list_grupos_dl{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;

    padding: .5rem;

    height: 57vh;
    width: 100%;

    overflow-x: auto;
    box-shadow: 0 0 2px 0 rgba(255,200,0,1);
    border-radius: 5px 5px 0 0;
}

    
`