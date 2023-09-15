import { useEffect, useState, useMemo } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import TableUserComponent from "../../components/TableUsuarios";
import { mockJsonUsers } from "../../utils/pagListaAlarmes";
import { PaginaUsuariosStl } from "./styles";
import * as Icon from "react-bootstrap-icons"
import ModalFormCadastro from "../../components/ModalFormCadastro";


function PaginaUsuarios(){

    const [mockUsers, setMockUsers] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(()=>{
        mockJsonUsers.map(
            (user)=> user['id-exclude'] = user.id
        )
        setMockUsers(mockJsonUsers)
    },[])

    const columns = useMemo(

        ()=>[        
            {
            Header: "Editar",
            accessor: "id",
            Cell: ({ value }) => (
                <span
                    onClick={(e) => alert(JSON.stringify(mockUsers.filter(
                        (user)=> user.id === value
                    )))} // Função de clique para a ação de edição
                    // onClick={(e)=> alert('oi')}
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
            Header: "Area",
            accessor: "area"
            },
            {
            Header: "Perfil",
            accessor: "perfil"
            },
            {
            Header: "Excluir",
            accessor: "id-exclude",
            Cell: ({ value }) => (
                <span
                  onClick={(e) => alert(JSON.stringify(mockUsers.filter(
                    (user)=> user.id === value
                )))} // Função de clique para a ação de edição
                >
                  <Icon.XCircleFill size={16} color="red"/>
                </span>
              ),
            },
        ],
        []
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
            <TableUserComponent columns={columns} data={mockUsers} />
            {openModal? <ModalFormCadastro />:<></>}
        </PaginaUsuariosStl>
    )
}

export default PaginaUsuarios