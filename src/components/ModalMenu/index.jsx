import { ModalMenuStl } from "./styles";

function ModalMenu({title, children, typeModal}){
    return (
        <ModalMenuStl typeModal={typeModal}>
            <div className="title_modal-menu">
                <p className="str_ttl_menu">{title || "Menu"}</p>
            </div>
            <hr />
            {children}
        </ModalMenuStl>
    )
}

export default ModalMenu