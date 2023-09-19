import { useState } from "react"
import { HeaderStl } from "./styles"
import ModalMenu from "../ModalMenu"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


import * as Icon from "react-bootstrap-icons"

function Header(){
    const [ clickMenu, setClickMenu ] = useState(false)
    const [ clickAdm, setClickAdm ] = useState(false)

    const history = useHistory()

    return (
        <HeaderStl style={{position: "relative"}}>
            {!!clickMenu?
            <ModalMenu onPointerLeave={()=> setClickMenu(!clickMenu)} setClickMenu={setClickMenu} clickMenu={clickMenu} title={"Menu"}>
                <ul  className="lista_menu">
                    <li onClick={()=> history.push('/lista-alarmes')} className="item_modal-menu">
                        <p className="str_item_menu">Lista de Alarmes</p>
                    </li>
                    <li onClick={()=> history.push('/grupos-atuacao')} className="item_modal-menu">
                        <p className="str_item_menu">Grupos de Atuação</p>
                    </li>
                    <li onClick={()=> history.push('/associacao')} className="item_modal-menu">
                        <p className="str_item_menu">Associação</p>
                    </li>
                    <li onClick={()=> history.push('/grupos-alarmes')} className="item_modal-menu">
                        <p className="str_item_menu">Grupos de Alarmes</p>
                    </li>
                    <li onClick={()=> history.push("/usuarios")} className="item_modal-menu">
                        <p className="str_item_menu">Usuários</p>
                    </li>                
                </ul>
            </ModalMenu> : ""           
            }
            {!!clickAdm?
            <ModalMenu onPointerLeave={()=> setClickAdm(!clickAdm)} typeModal={"adm"}>
                <ul className="list_admBtn">
                    <li className="item_modal-menu">
                        <p className="edit-senha"><Icon.Pencil size={30} />Editar Senha</p>
                    </li> 
                    <li onClick={()=> history.push("/")} className="item_modal-menu">
                        <p className="str_item_menu"><Icon.BoxArrowLeft  size={30}/>Logout</p>
                    </li>                    
                </ul>
            </ModalMenu> : ""           
            }            
            <div className="container_menu-logo">
                <button onPointerEnter={()=>setClickMenu(!clickMenu)} onClick={()=>setClickMenu(!clickMenu)} className="btn_menu"><Icon.List size={50} /></button>
                <div className="logo_str">
                    <p className="ura">Ura</p>
                    <p className="vocal">Vocalizadora</p>
                </div>
            </div>
            <button onPointerEnter={()=> setClickAdm(!clickAdm)} onClick={()=>setClickAdm(!clickAdm)} className="status_admin">
                Admin <Icon.ChevronDown  size={20}/>
            </button>
        </HeaderStl>
    )
}

export default Header