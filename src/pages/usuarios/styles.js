import styled from "styled-components";

export const PaginaUsuariosStl = styled.main`

    .btn-criarUsuario{

        min-height: 5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5rem 0 3rem;

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

        #pesquisa{
            height: 2.5rem;
            width: 20%;
            padding: .5rem;

            font-size: medium;
        }
    }

    .sg{
        font-size: x-small;
        font-weight: 600;
        color: purple;
    }
    
    .dl{
        font-size: x-small;
        font-weight: 600;
        color: rgba(255,200,0,1);
    }

`