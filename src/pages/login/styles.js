import styled from "styled-components";

export const LoginStl = styled.main`
    .logo_login{
        width: 100%;
        max-width: 504px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .submit{
        background-color: purple;
        color: #FFF;
        border-style: none;

        width: 60%;
        height: 3rem;
        border-radius: 5px;

        font-weight: bold;
        font-size: large;

        &:hover{
            cursor: pointer;
            opacity: .7;
        }
    }

    .container_err{
        display: flex;
        flex-direction: column;
        gap: .2rem;
    }

    .msg_error{
        color: red;
        font-size: x-small;
    }

    .company{
        color: gray;

        height: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: .3rem;

        margin-top: 1.5rem;
    }

    /* .imgPass{
        width: 3.8rem;
        height: 3.8rem;
    } */
`