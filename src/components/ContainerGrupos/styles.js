import styled from "styled-components";

export const ContainerGruposStl = styled.section`

    border: solid gray;
    border-radius: 5px;

    height: 80vh;
    width: 90%;

    margin: 1rem auto 0 auto;
    padding: 1rem;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .btn_novoGrupo{
        border-style: none;
        border-radius: 50px;

        height: 3rem;
        width: 18rem;

        color: white;
        background-color: rgba(0,130,255,1);

        font-size: medium;
        font-weight: bold;

        cursor: pointer;
        &:active{
            opacity: .5;
        }
    }

    .div_cargaMassiva{
        height: 3rem;
        width: 18rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .15rem;

        border: solid purple;
        border-radius: 50px;
        background-color: purple;
    }

    .cm{
        height: 2.7rem;
        width: 9rem;
        border-style: none;
        background-color: white;

        font-weight: 600;

        cursor: pointer;
        &:active{
            opacity: .5;
        }
    }

    .cm_sg{
        border-radius: 50px 0 0 50px;
        color: purple;
    }

    .cm_dl{
        border-radius: 0 50px 50px 0;
        color: rgba(255,200,0,1);
    }

    .btn_cargaMassiva{
        border-style: none;
        border-radius: 50px;

        height: 3rem;
        width: 18rem;

        color:  rgba(255,200,0,1);
        background-color: purple;

        font-size: medium;
        font-weight: bold;

        cursor: pointer;
        &:active{
            opacity: .5;
        }
    }

    .btn_filter{
        width: auto;
        min-width: 18rem;

        color: white;
        background-color: rgba(255,200,0,1);
        padding: 1rem;

        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .container_SG_DL{
        display: flex;
        justify-content: space-between;


        width: 100%;
    }

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }
`