import { useState } from "react"
import { HeaderStl } from "./styles"
import ModalMenu from "../ModalMenu"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Header(){
    const [ clickMenu, setClickMenu ] = useState(false)
    const [ clickAdm, setClickAdm ] = useState(false)

    const history = useHistory()

    return (
        <HeaderStl style={{position: "relative"}}>
            {!!clickMenu?
            <ModalMenu title={"Menu"}>
                <ul className="lista_menu">
                    <li className="item_modal-menu">
                        <p className="str_item_menu">Lista de Alarmes</p>
                    </li>
                    <li className="item_modal-menu">
                        <p className="str_item_menu">Grupos de Atuação</p>
                    </li>
                    <li className="item_modal-menu">
                        <p className="str_item_menu">Associação</p>
                    </li>
                    <li className="item_modal-menu">
                        <p className="str_item_menu">Grupos de Alarmes</p>
                    </li>
                    <li className="item_modal-menu">
                        <p className="str_item_menu">Usuários</p>
                    </li>                
                </ul>
            </ModalMenu> : ""           
            }
            {!!clickAdm?
            <ModalMenu typeModal={"adm"} title={"Menu"}>
                <ul className="list_admBtn">
                    <li onClick={()=> history.push("/")} className="item_modal-menu">
                        <p className="str_item_menu">Logout</p>
                    </li>                    
                </ul>
            </ModalMenu> : ""           
            }            
            <div className="container_menu-logo">
                <button onClick={()=>setClickMenu(!clickMenu)} className="btn_menu">M</button>
                <div className="logo_str">
                    <p className="ura">Ura</p>
                    <p className="vocal">Vocalizadora</p>
                </div>
            </div>
            <button onClick={()=> setClickAdm(!clickAdm)} className="status_admin">
                Admin <span className="seta_btn"> v</span>
            </button>
        </HeaderStl>
    )
}

export default Header