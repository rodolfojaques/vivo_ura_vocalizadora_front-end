import { default as styled } from "styled-components";

export const BackgroundStl = styled.div`
background-color: rgba(0,0,0,.5);

width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: flex-start;
padding: 6rem;

position: absolute;
top: 0%;
left: 0%;
right: 0%;
bottom: 0%;

z-index: 51;
`

export const ModalFilterInputStl = styled.div`

    width: 85%;
    height: 85%;

    border: solid red;
    border-radius: 5px;
    background-color: white;

    display: flex;
    gap: 1rem;

    padding: 1rem;

    .parametros-in{
        border: solid grey;
        border-radius: 5px;

        width: 35%;
    }

    .parametros-list{
        border: solid grey;
        border-radius: 5px;

        width: 65%;

        ul{
            overflow: auto;
            padding: .5rem;

        }

        li{
            display: flex;
            gap: .5rem;

            border: solid;
            padding: .5rem;
            
            white-space: nowrap;
            min-width: max-content;
        }
    }
`;