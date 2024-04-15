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

    width: 97%;
    height: 100%;

    border-radius: 5px;
    background-color: white;

    display: flex;
    gap: 1rem;

    padding: 1rem;

    .parametros-in{
        border: solid grey;
        border-radius: 5px;

        padding: 1rem;

        width: 35%;
    }

    .form-parametros{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .title{
        color: purple;
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
        height: 2rem;
        border-radius: 5px;

        padding: 0 .5rem;

        border-style: none;
        border: solid gray;

        select{
            color: gray;
            font-size: small;
        }
    }

    .parametros-list{
        border: solid grey;
        border-radius: 5px;

        width: 65%;

        ul{
            overflow: auto;
            padding: .5rem;

            height: 100%;

            display: flex;
            flex-direction: column;
            gap: .5rem;

        }

        li{
            display: flex;
            justify-content: space-between;
            gap: .5rem;

            border: solid  rgba(255,200,0,1);
            border-radius: 5px;
            padding: .5rem;
            
            white-space: nowrap;
            min-width: max-content;
        }

        .line-param{
            font-size: small;
            font-weight: 600;
            color: purple;

            span{
                font-weight: 400;
                color: gray;
            }
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

            width: 6rem;
            height: 2.5rem;

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