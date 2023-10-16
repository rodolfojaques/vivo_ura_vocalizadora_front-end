import styled from "styled-components";

export const HeaderStl = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    height: 5rem;

    box-shadow: 0 0 2px 0;

    .container_menu-logo{
        display: flex;
        justify-content: center;
        gap: .5rem;
        align-items: center;

        max-height: 5rem;

        .btn_menu{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: white;
            color: purple;

            border-style: none;
            border: solid purple 3px;
            border-radius: 5px;

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
            height: 5rem;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: .5rem;

            padding-bottom: .9rem;
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

        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-left: 10px;

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