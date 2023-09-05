import styled from "styled-components";

export const HeaderStl = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    height: 8vh;

    box-shadow: 0 0 2px 0;

    .container_menu-logo{
        display: flex;
        gap: .5rem;
        align-items: baseline;

        max-height: 3rem;

        .btn_menu{
            background-color: white;
            color: purple;

            border-style: none;
            border: solid purple 3px;

            font-weight: bold;
            font-size: x-large;

            width: 3rem;
            height: 3rem;

            &:hover{
                cursor: pointer;
            }

            &:active{
                opacity: .7;            
            }
        }

        .logo_str{
            display: flex;
            flex-direction: column;
        }

        .ura{
            font-weight: 900;
            font-size: 40px;

            height: 2.33rem;
        }

        .vocal{
            font-weight: 100;
            font-size: small;
        }


    }
    
    .status_admin{
        border-style: none;
        border-radius: 50px;

        background-color: purple;
        color: white;

        width: 8rem;
        height: 3rem;
        padding-left: 28px;

        font-size: large;

        .seta_btn{
            font-weight: 900;
            font-size: x-large;
            margin-left: 10px;

        }
        
        &:hover{
            cursor: pointer;

        }

        &:active{
            opacity: .7;            
        }
    }
`