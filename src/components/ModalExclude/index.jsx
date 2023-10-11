import { useContext, useEffect, useState } from "react";
import { ModalExcludeStl } from "./styles";
import { UserContext } from "../../providers/user";
import axios from "axios";

function ModalExcludeComponent({dadosUsers, openModalExclude, setOpenModalExclude}){

    const [user, setUser] = useState({})

    const {baseURL, usuario} = useContext(UserContext)

    useEffect(()=>{
        console.log(dadosUsers);
        axios.get(`${baseURL}/usuario/${dadosUsers}`,{
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

    return (
        <ModalExcludeStl>
            <h2 className="atencao">Atenção</h2>
            <p className="txt_exclude">
                Você tem certeza que deseja excluir<br></br>
                o usuário {user.nome}, de RE {user.RE}?
            </p>
            <div className="btns">
                <button onClick={()=> setOpenModalExclude(!openModalExclude)} className="btn voltar">Voltar</button>
                <button className="btn excluir">Excluir</button>                
            </div>
        </ModalExcludeStl>
    )
}

export default ModalExcludeComponent