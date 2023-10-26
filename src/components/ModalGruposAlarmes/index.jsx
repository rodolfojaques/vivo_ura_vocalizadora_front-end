import { arrEstado, arrSite, arrTipoAlarme } from "../../utils/pagListaAlarmes";
import { ModalGruposAlarmesStl } from "./styles";

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

    const schema = yup.object().shape({
        nomeGrupo: yup.string().required("*Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        axios.post(`${baseURL}/grupos-alarmes/register`,data,{
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
        <ModalGruposAlarmesStl>
            <h2 className="title_modal">
                Criar Novo Grupo
            </h2>
            <form onSubmit={handleSubmit(formSchema)} action="" className="form_grp_alarme">
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
    )
}

export default ModalGruposAlarmesComponente