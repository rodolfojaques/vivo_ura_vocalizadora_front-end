import styled from "styled-components";

export const ModalMenuStl = styled.div`
    background-color: purple;

    max-width: 200px;
    min-width: 8rem;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 4.8rem;
    right: ${({typeModal})=> typeModal==="adm"? "1rem":""};
    z-index: 50;

    box-shadow: 0 0 3px 0;
    

    .title_modal-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;

        font-weight: bold;
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        padding: .5rem;
        cursor: pointer;
    }
`