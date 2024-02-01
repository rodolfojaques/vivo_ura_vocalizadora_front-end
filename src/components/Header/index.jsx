import { useContext, useState } from "react";
import { HeaderStl } from "./styles";
import ModalMenu from "../ModalMenu";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../providers/user";
import ModalEditSenha from "../ModalEditSenha";

import * as Icon from "react-bootstrap-icons";
import ModalAlterarPlantao from "../ModalAlterarPlantao";

function Header() {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickAdm, setClickAdm] = useState(false);

  const [clickItemListAlarm, setClickItemListAlarm] = useState(false);
  const [clickItemAssociacao, setClickItemAssociacao] = useState(false);

  const navigate = useNavigate();

  const {
    usuario,
    editSenha,
    setEditSenha,
    alterarPlantao,
    setAlterarPlantao,
  } = useContext(UserContext);

  const nomeWithSplit = usuario.user.nome.split(" ");
  return (
    <HeaderStl style={{ position: "relative" }}>
      {alterarPlantao && (
        <ModalAlterarPlantao setAlterarPlantao={setAlterarPlantao} />
      )}
      {!!clickMenu ? (
        <ModalMenu
          onPointerLeave={() => setClickMenu(!clickMenu)}
          setClickMenu={setClickMenu}
          clickMenu={clickMenu}
          title={"Menu"}
        >
          <ul className="lista_menu">
            <li
              onClick={()=> setClickItemListAlarm(!clickItemListAlarm)}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Lista de Alarmes</p>
              {
                clickItemListAlarm? <Icon.ChevronDown className="icon-style"/>:<Icon.ChevronLeft className="icon-style"/> 
              }              
            </li>
            {
              clickItemListAlarm?
              <div className="dropdown_item_menu">
                <p
                  onClick={() => navigate("/lista-alarmes")} 
                  className="str_item_menu_dd"
                >SG-Infra</p>
                <p 
                  onClick={() => navigate("/lista-alarmes-tems")}
                  className="str_item_menu_dd"
                >DL-Tems</p>
              </div>:<></>
            }   
            <li
              onClick={()=> setClickItemAssociacao(!clickItemAssociacao)}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Associação</p>
              {
                clickItemAssociacao? <Icon.ChevronDown className="icon-style"/>:<Icon.ChevronLeft className="icon-style"/> 
              }              
            </li>
            {
              clickItemAssociacao?
              <div className="dropdown_item_menu">
                <p
                  onClick={() => navigate("/associacao")} 
                  className="str_item_menu_dd"
                >SG-Infra</p>
                <p
                  onClick={() => navigate("/associacao-tems")}
                  className="str_item_menu_dd"
                >DL-Tems</p>
              </div>:<></>
            }                                      
            <li
              onClick={() => navigate("/grupos-atuacao")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Grupos de Atuação</p>
            </li>
            <li
              onClick={() => navigate("/grupos-alarmes")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Grupos de Alarmes</p>
            </li>
            <li
              onClick={() => navigate("/usuarios")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Usuários</p>
            </li>
          </ul>
        </ModalMenu>
      ) : (
        ""
      )}
      {!!clickAdm ? (
        <ModalMenu
          onPointerLeave={() => setClickAdm(!clickAdm)}
          typeModal={"adm"}
        >
          <ul className="list_admBtn">
            <li className="item_modal-menu">
              <p
                onClick={() => setEditSenha(!editSenha)}
                className="edit-senha"
              >
                <Icon.Pencil size={30} />
                Editar Senha
              </p>
            </li>
            <li className="item_modal-menu">
              <p
                className="edit-senha"
                onClick={() => setAlterarPlantao(!alterarPlantao)}
              >
                <Icon.ListCheck size={30} />
                Alterar plantões
              </p>
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="item_modal-menu"
            >
              <p className="str_item_menu">
                <Icon.BoxArrowLeft size={30} />
                Logout
              </p>
            </li>
          </ul>
        </ModalMenu>
      ) : (
        ""
      )}
      {!!editSenha ? <ModalEditSenha /> : <></>}
      <div className="container_menu-logo">
        <button
          onPointerEnter={() => setClickMenu(!clickMenu)}
          onClick={() => setClickMenu(!clickMenu)}
          className="btn_menu"
        >
          <Icon.List size={50} />
        </button>
        <div className="logo_str">
          <p className="ura">Ura</p>
          <p className="vocal">Vocalizadora</p>
        </div>
      </div>
      <button
        onPointerEnter={() => setClickAdm(!clickAdm)}
        onClick={() => setClickAdm(!clickAdm)}
        className="status_admin"
      >
        {nomeWithSplit[0]} <Icon.ChevronDown size={20} />
      </button>
    </HeaderStl>
  );
}

export default Header;
