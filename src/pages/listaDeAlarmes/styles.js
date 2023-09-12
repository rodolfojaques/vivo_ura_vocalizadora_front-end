import styled from "styled-components";

export const ListaDeAlarmesStl = styled.main`
.cabListAlarm{
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 0 3rem;

    margin-bottom: 2rem;

    .quantidade_linhas{

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: .3rem;

        width: 7rem;

        .quant_lin_label{
            font-size: small;
            font-weight: bold;
        }

        #quant_lin{
            width: 6rem;
            height: 2rem;
            padding: 0rem .3rem;

            border-style: none;
            border: solid gray 1px;
            border-radius: 5px;

            background-color: white;

            color: gray;
        }
    }
}
`

export const FormListAlarmStl = styled.section`
    width: 80%;
    height: 23.5rem;
    max-width: 900px;

    .campos_principais{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;

        padding: 1rem;

        height: 11rem;

        .divDrop_down{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .3rem;

            width: 23%;

            .label_dropDown{
                font-size: small;
                font-weight: bold;
            }
            .campos_dropDown{
                width: 100%;
                height: 2rem;
                padding: 0rem .3rem;

                border-style: none;
                border: solid gray 1px;
                border-radius: 5px;

                background-color: white;
    
                color: gray;
            }
        }
    }

    .campos_dataTime{
        height: 9.5rem;

        display: flex;
        flex-direction: column;

        .campos_dataTime_container_stl{
            height: 11rem;
            
            display: flex
        }

        .datas{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .3rem;
            padding: 1rem;


            width: 40%;
            font-size: small;
            font-weight: bold;
            
            

            .container_alinhamento_data_1{
                width: 80%;
                
                position: relative;
            }
            .container_alinhamento_data_2{
                width: 80%;
                
                position: relative;
            }

            .data_{
                width: 100%;
                height: 2rem;
                padding: 0rem .3rem;
                
                border-style: none;
                border: solid gray 1px;
                border-radius: 5px;

                margin-bottom: 1rem;

                background-color: white;
    
                color: gray;

                display: flex;
                flex-direction: row-reverse;
                gap: .3rem;

            }

            .placeDataInicio{
                position: absolute;
                top: .45rem;
                right: .5rem;

                font-size: medium;
                font-weight: 600;

                color: #888888;
            }

            .placeDataFim{
                position: absolute;
                top: .45rem;
                right: 1rem;

                font-size: medium;
                font-weight: 600;

                color: #888888;
            }
        }
    }

    .horas{
        width: 30%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: .3rem;
        padding: 1rem;

        font-size: small;
        font-weight: bold;

        .campos_dropDown{
            width: 100%;
            height: 2rem;
            padding: 0rem .3rem;

            border-style: none;
            border: solid gray 1px;
            border-radius: 5px;

            background-color: white;

            color: gray;
        }
        
    }
    
    .pesquisa_btnSubmit{
        height: 3rem;
        width: 70%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1rem;
        gap: 1rem;

        .barra_pesquisa{
            width: 18rem;
            height: 2rem;
            padding: 0rem .3rem;

            border-style: none;
            border: solid gray 1px;
            border-radius: 5px;

            background-color: white;

            color: gray;
        }

        .btn_filtrar{
            background-color: purple;
            color: #FFF;
            border-style: none;

            width: 7rem;
            height: 2rem;
            border-radius: 5px;

            font-weight: bold;
            font-size: medium;
            cursor: pointer;

            &:active{                
                opacity: .7;
            }
        }

    }
`