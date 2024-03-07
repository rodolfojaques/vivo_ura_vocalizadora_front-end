import styled from "styled-components";

export const BackgroundStl = styled.div`
background-color: rgba(0,0,0,.5);

width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

position: absolute;
top: 0%;
left: 0%;
right: 0%;
bottom: 0%;

z-index: 51;
`

export const ModalFormCadastroStl = styled.div`

    border: solid gray;
    border-radius: 5px;
    box-shadow: 0 0 3px 0;

    min-width: 25rem;
    background-color: white;


    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.3rem;

    .form_cadastro{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: flex-end;

        .container_intern_camp{
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            align-items: center;

            width: 100%;

            .label_campos{
                font-size: medium;
                font-weight: 600;
            }

            .campos{
                width: 80%;
                height: 2rem;

                padding-left: .5rem;

                border-style: none;
                border: solid gray;
                border-radius: 5px;
            }            
        }

        .container_campos{
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .3rem;

            .msg_error{
                color: red;
                font-size: small;

                margin-left: 4.5rem;
            }
        }
    }

    .btn_form_cadastro{
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
`