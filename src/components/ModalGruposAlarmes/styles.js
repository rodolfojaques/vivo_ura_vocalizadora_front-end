import styled from "styled-components";

export const ModalGruposAlarmesStl = styled.div`

    border: solid gray;
    border-radius: 5px;
    

    position: fixed;
    top: 14rem;
    left: 5rem;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;

    .form_grp_alarme{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .container_campos{
        width: 100%;

        .container_intern_camp{
            width: 100%;

            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: .5rem;

            .label_campos{
                font-size: medium;
                font-weight: 600;
            }

            .campos{
                width: 15rem;
                height: 2rem;

                padding-left: .5rem;

                border-style: none;
                border: solid gray;
                border-radius: 5px;
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

    .msg_error{
        color: red;
        font-size: small;

        margin-left: 4.5rem;
    }

`