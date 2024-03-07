import { BackgroundStl, ModalGruposAlarmesStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../providers/user";
import { toast } from "react-toastify";

function ModalGruposAlarmesComponente({
    openModalAlarm,
    setOpenModalAlarm,
    gruposAlarmes,
    setGruposAlarmes
}){
    const {
        baseURL,
        usuario
    } = useContext(UserContext)

    const [ typeTm, setTypeTm ] = useState("SG")

    const schema = yup.object().shape({
        nomeGrupo: yup.string().required("*Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {

        const URL = typeTm == "SG"? `${baseURL}/grupos-alarmes/register` : `${baseURL}/grupos-alarmes-tems/register`

        axios.post(URL,data,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            toast.success("Grupo de Alarme criado com sucesso!")
            setOpenModalAlarm(!openModalAlarm)
        })
        .catch(err => console.log(err))
    }

    return(
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenModalAlarm(!openModalAlarm)}}>
            <ModalGruposAlarmesStl>
                <h2 className="title_modal">
                    Criar Novo Grupo
                </h2>
                <form onSubmit={handleSubmit(formSchema)} action="" className="form_grp_alarme">
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                Setor
                            </label>
                            <select className="campos campos_dropDown" onClick={(e)=> setTypeTm(e.target.value)}  {...register("typeTeam")}>
                                <option value="SG"></option> 
                                <option value="SG">SG-INFRA</option> 
                                <option value="DL">DL-TEMS</option>                               
                            </select>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                Nome do Grupo
                            </label>
                            <input type="text" className="campos" placeholder="Nome do grupo..." {...register("nomeGrupo")}/>
                        </div>
                            {errors?.nomeGrupo?.message?
                                <span className="msg_error">{errors.nomeGrupo?.message}</span>:""}
                    </div>
                    <div className="btn_form">
                        <button onClick={()=> setOpenModalAlarm(!openModalAlarm)} className="btn fechar">Fechar</button>
                        <input className="btn salvar" type="submit" value="Salvar" />
                    </div>                
                </form>
            </ModalGruposAlarmesStl>            
        </BackgroundStl>
    )
}

export default ModalGruposAlarmesComponente