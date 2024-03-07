import styled from "styled-components";

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

export const ModalExcludeStl = styled.div`

    border: solid gray;
    border-radius: 5px;
    width: 20rem;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    padding: 1.5rem;

    h2{
        color: red;
    }

    p{
        font-weight: 500;
    }

    .btns{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;

        .btn{
            border-style: none;
            border-radius: 5px;
            cursor: pointer;

            width: 5rem;
            height: 2rem;
            
            color: white;

            &:active{
                opacity: .5;
            }
        }

        .voltar{
            background-color: gray;
        }

        .excluir{
            background-color: red;
        }
    }
`