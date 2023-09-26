import styled from "styled-components";

export const BoxNomeGrupoStl = styled.li`

    .box1{
        background-color: blue;
        color: white;

        border-radius: 5px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
        padding: .8rem;

        min-width: 10rem;
        
        .nome{
            font-weight: 900;
            margin: 0 auto;

            cursor: pointer;
        }
        
        .ttl_p{
            font-size: x-small;
            font-weight: 600;
            
            .info_span{
                font-size: 8px;
                font-weight: 500;
            }
        }
    }

    .box2{
        background-color: blue;
        color: white;

        border-radius: 5px;

        display: flex;
        justify-content: space-between;
        padding: .8rem;

        width: 10rem;

        .nome{
            font-size: small;
            font-weight: 600;

            cursor: pointer;
        }        
    }

`