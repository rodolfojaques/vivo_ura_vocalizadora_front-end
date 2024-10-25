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

export const ModalCargaMassivaStl = styled.div`

    border-radius: 5px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    padding: 2rem;

    .title{
        color: purple;
    }

    .text-info{
        color: gray;
        font-size: small;

        line-height: 1.4;
        letter-spacing: 0.3px;
        word-spacing: 1.4px;

        text-align: start;
    }

    .form_carga_massiva{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .line-input{
        display: flex;
        flex-direction: column;
        gap: .5rem;

        text-align: start;
    }

    .label-inputs{
        font-weight: 600;
        color: gray;
    }

    .inputs{
        height: 3rem;
        border: solid gray;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: .6rem .5rem;

        select{
            color: gray;
            font-size: small;
        }
    }

    .btn_form{
        width: 100%;
        height: 3rem;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;

        .btn{
            border-style: none;
            border-radius: 5px;

            width: 8rem;
            height: 3rem;

            font-size: small;
            font-weight: bold;

            color: white;
            cursor: pointer;

            &:active{
                opacity: .5;
            }
        }

        .fechar{
            background-color: gray;
        }

        .salvar{
            background-color: green;
        }
    }
`;