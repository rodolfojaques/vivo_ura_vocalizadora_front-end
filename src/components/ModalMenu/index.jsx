import { ModalMenuStl } from "./styles";
import * as Icon from "react-bootstrap-icons"

function ModalMenu({title, children, typeModal, setClickMenu, clickMenu, onPointerLeave}){
    return (
        <ModalMenuStl onPointerLeave={onPointerLeave} typeModal={typeModal}>
            {
                typeModal !== "adm" ?
                <>
                    <div className="title_modal-menu">
                        <p className="str_ttl_menu"><Icon.List  size={30}/>{title || "Menu"}</p>
                    </div>
                    <hr />               
                </>  : <></>               
            }
            {children}
        </ModalMenuStl>
    )
}

export default ModalMenu