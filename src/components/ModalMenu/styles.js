import styled from "styled-components";

export const ModalMenuStl = styled.div`
    background-color: ${({typeModal})=> typeModal==="adm"? "#FFF":"purple"};

    width: ${({typeModal})=> typeModal==="adm"? "200px":"280px"};
    height: ${({typeModal})=> typeModal==="adm"? "10rem":"100vh"};

    display: flex;
    flex-direction: column;

    position: absolute;
    top: ${({typeModal})=> typeModal==="adm"? "4.8rem":"0rem"};
    right: ${({typeModal})=> typeModal==="adm"? "1rem":""};
    left: ${({typeModal})=> typeModal==="adm"? "":"0rem"};
    z-index: 50;

    box-shadow: 0 0 3px 0;
    

    .title_modal-menu{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 5rem;

        padding-left: .8rem;

        font-weight: bold;
        font-size: x-large;
    }

    .str_ttl_menu{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;

        cursor: ${({typeModal})=> typeModal==="adm"? "":"pointer"};
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 5rem;
        padding: ${({typeModal})=> typeModal==="adm"? ".8rem":"3rem .8rem"};

        width: 90%;
        height: ${({typeModal})=> typeModal==="adm"? "4rem":"47rem"};

        font-size: larger;

        cursor: pointer;

        li{
            width: 100%;
            height: 2.7rem;

            p{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 1rem;

                width: 100%;
                height: 2.7rem;
                
                &:hover{
                    font-weight: 600;
                }

                &:active{
                    opacity: .5;
                }
            }
        }
    }
`