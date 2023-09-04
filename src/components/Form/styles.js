import styled from "styled-components";

export const FormStl = styled.div`
border-radius: 5px;
box-shadow: 0 0 3px 0;
max-width: 400px;
min-width: 279px;

padding-bottom: 1.5rem;

    .title{
        background-color: purple;
        color: #FFF;
        width: 100%;
        height: 4rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px 5px 0px 0px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;

        margin-top: 1.5rem;

        div{
            display: flex;
            justify-content: center;
            align-items: center;   
            
            width: 95%;

            input{
                height: 3rem;
                width: 100%;
                padding-left: .5rem;

                &::placeholder{
                    color: grey;
                }

                border-style: none;
                border: solid grey 1px;
                border-radius: 5px;
            }
        }
    }

    figure{
        width: 3rem;
        height: 3rem;
        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }


    img{
        width: 2.3rem;
        height: 2.3rem;
        margin: 0 .3rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`