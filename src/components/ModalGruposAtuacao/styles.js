import styled from "styled-components";

export const ModalGruposAtuacaoStl = styled.div`

    border: solid gray;
    border-radius: 5px;
    

    position: fixed;
    top: 9rem;
    left: 15rem;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;

    .form_gp_atuacao{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        .contCampos_nome{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: .5rem;
        }

        .contCampos_open{
            display: flex;
            flex-direction: column;
            gap: .5rem;

            .line_1{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: .5rem;
            }

            .line_2{
                display: flex;
                justify-content: flex-end;
                gap: .5rem;

                .campos_line2{
                    width: 7rem;
                    height: 1.6rem;

                    padding-left: .5rem;

                    border-style: none;
                    border: solid gray;
                    border-radius: 5px;
                }

            }
        }

        .contCampos{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: .5rem;

            .btn_manual{
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: center;

                font-size: x-small;
                font-weight: 600;

                width: 5rem;

                background-color: purple;
                color: white;
                border-style: none;
                border-radius: 5px;

                height: 1.6rem;

                cursor: pointer;
                &:active{
                    opacity: .5;
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
            height: 1.8rem;

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
    }


    .label_campos{
        font-size: smaller;
        font-weight: 600;
    }

    .campos{
        width: 15rem;
        height: 1.6rem;

        padding-left: .5rem;

        border-style: none;
        border: solid gray;
        border-radius: 5px;

        font-size: x-small;
    }
`