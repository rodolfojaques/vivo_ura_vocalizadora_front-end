import { useEffect, useState, useMemo, useContext } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import TableUserComponent from "../../components/TableUsuarios";
import { mockJsonUsers } from "../../utils/pagListaAlarmes";
import { PaginaUsuariosStl } from "./styles";
import * as Icon from "react-bootstrap-icons"
import ModalFormCadastro from "../../components/ModalFormCadastro";
import ModalExcludeComponent from "../../components/ModalExclude";
import axios from "axios";
import { UserContext } from "../../providers/user";


function PaginaUsuarios(){

    const [users, setUsers] = useState([])
    const [idUser, setIdUser] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [openModalExclude, setOpenModalExclude] = useState(false)

    const {baseURL,usuario} = useContext(UserContext)    

    useEffect(()=>{
        axios.get(`${baseURL}/usuario`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            res.data.map((obj)=>{
                obj["id_exclude"] = obj.id
            })
            console.log(res.data);
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    },[openModal,openModalEdit,openModalExclude])

    const columns = useMemo(

        ()=>[        
            {
            Header: "Editar",
            accessor: "id",
            Cell: ({ value }) => (
                <span
                    onClick={(e) => {
                        setIdUser(value)
                        setOpenModalEdit(!openModalEdit)
                    }}
                >
                  <Icon.Tools size={16} color="rgba(0, 130, 255, 1)"/>
                </span>
              ),
            },
            {
            Header: "Nome",
            accessor: "nome"
            },
            {
            Header: "RE",
            accessor: "RE"
            },
            {
            Header: "E-mail",
            accessor: "email"
            },
            {
            Header: "Tel/Cel",
            accessor: "tel_cel"
            },
            {
            Header: "Perfil",
            accessor: "perfil"
            },
            {
            Header: "Excluir",
            accessor: "id_exclude",
            Cell: ({ value }) => (
                <span
                  onClick={(e) => {
                    setIdUser(value)
                    setOpenModalExclude(!openModalExclude)
                  }}
                >
                  <Icon.XCircleFill size={16} color="red"/>
                </span>
              ),
            },
        ],[]
    )

    return (
        <PaginaUsuariosStl>
            <Header />
            <CaminhoComponent path={'Usuários'}/>
            <div className="btn-criarUsuario">
                <button onClick={()=> setOpenModal(!openModal)} className="new-user">
                    Novo Usuário
                </button>
            </div>
            <TableUserComponent columns={columns} data={users} />
            {openModal? <ModalFormCadastro title={"Cadastrar Usuário"}  openModal={openModal} setOpenModal={setOpenModal}/>:<></>}
            {openModalEdit? <ModalFormCadastro title={"Editar Usuário"} idUser={idUser} openModalEdit={openModalEdit} setOpenModalEdit={setOpenModalEdit}/>:<></>}
            {openModalExclude? <ModalExcludeComponent idUser={idUser}  openModalExclude={openModalExclude} setOpenModalExclude={setOpenModalExclude}/>:<></>}
        </PaginaUsuariosStl>
    )
}

export default PaginaUsuarios