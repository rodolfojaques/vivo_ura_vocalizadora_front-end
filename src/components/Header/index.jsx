import { useContext, useState } from "react";
import { HeaderStl } from "./styles";
import ModalMenu from "../ModalMenu";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { UserContext } from "../../providers/user";
import ModalEditSenha from "../ModalEditSenha";

import * as Icon from "react-bootstrap-icons";
import ModalAlterarPlantao from "../ModalAlterarPlantao";

function Header() {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickAdm, setClickAdm] = useState(false);

  const history = useHistory();

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
              onClick={() => history.push("/lista-alarmes")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Lista de Alarmes</p>
            </li>
            <li
              onClick={() => history.push("/grupos-atuacao")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Grupos de Atuação</p>
            </li>
            <li
              onClick={() => history.push("/associacao")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Associação</p>
            </li>
            <li
              onClick={() => history.push("/grupos-alarmes")}
              className="item_modal-menu"
            >
              <p className="str_item_menu">Grupos de Alarmes</p>
            </li>
            <li
              onClick={() => history.push("/usuarios")}
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
                history.push("/");
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
