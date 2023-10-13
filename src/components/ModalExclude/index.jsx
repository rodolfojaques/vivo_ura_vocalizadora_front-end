import { useContext, useEffect, useState } from "react";
import { ModalExcludeStl } from "./styles";
import { UserContext } from "../../providers/user";
import axios from "axios";

function ModalExcludeComponent({idUser, openModalExclude, setOpenModalExclude}){

    const [user, setUser] = useState({})

    const {baseURL, usuario} = useContext(UserContext)

    useEffect(()=>{
        console.log(idUser);
        axios.get(`${baseURL}/usuario/${idUser}`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }}
        )
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
        .catch(err => console.error(err))        
    },[])

    const excludeUsuario = () => {
        axios.delete(`${baseURL}/usuario/delete/${idUser}`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }}
        )
        .then(res => {
            console.log(res.data)
            setOpenModalExclude(!openModalExclude)
        })
        .catch(err => console.error(err))
    }

    return (
        <ModalExcludeStl>
            <h2 className="atencao">Atenção</h2>
            <p className="txt_exclude">
                Você tem certeza que deseja excluir<br></br>
                o usuário {user.nome}, de RE {user.RE}?
            </p>
            <div className="btns">
                <button onClick={()=> setOpenModalExclude(!openModalExclude)} className="btn voltar">Voltar</button>
                <button onClick={()=> excludeUsuario()} className="btn excluir">Excluir</button>                
            </div>
        </ModalExcludeStl>
    )
}

export default ModalExcludeComponent