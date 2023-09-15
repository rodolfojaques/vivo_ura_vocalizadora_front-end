import styled from "styled-components";

export const PaginaUsuariosStl = styled.main`

    .btn-criarUsuario{

        min-height: 5rem;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 3rem;

        .new-user{
            border-style: none;
            border-radius: 50px;

            color: white;
            background-color: rgba(0,130,255,1);

            height: 3rem;
            width: 9rem;

            font-size: medium;
            font-weight: 600;

            cursor: pointer;
            &:active{
                opacity: .5;
            }
        }
    }

`