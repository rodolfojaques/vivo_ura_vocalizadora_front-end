import styled from "styled-components";

const ModalEditSenhaStl = styled.div`
    z-index: 50;

    width: 15rem;
    padding: 1rem;

    background-color: white;

    border-radius: 5px;
    border: solid;
    box-shadow: 0 0 5px 0;

    position: fixed;
    top: 7rem;
    right: 13rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    .form_edit{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .container{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .2rem;
        }
    }

    .label_input{
        font-size: small;
        font-weight: 600;
        padding-left: .3rem;
    }

    .input_senha{
        width: 100%;
        height: 2rem;


        padding-left: .5rem;

        border-style: none;
        border: solid gray;
        border-radius: 5px;
    }

    .error{
        color: red;
        font-size: x-small;
        padding-left: .3rem;
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

            width: 4.5rem;
            height: 2rem;

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
export default ModalEditSenhaStl