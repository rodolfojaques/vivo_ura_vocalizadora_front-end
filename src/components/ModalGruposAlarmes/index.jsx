import { arrEstado, arrSite, arrTipoAlarme } from "../../utils/pagListaAlarmes";
import { ModalGruposAlarmesStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

function ModalGruposAlarmesComponente({
    openModalAlarm,
    setOpenModalAlarm,
    gruposAlarmes,
    setGruposAlarmes
}){
    const [ID] = useState(Math.random())

    const schema = yup.object().shape({
        nomeGrupo: yup.string().required("*Campo obrigatório"),
        UF: yup.string().required("*Campo obrigatório"),
        site: yup.string().required("*Campo obrigatório"),
        tipoAlarme: yup.string().required("*Campo obrigatório"),
        classificacao: yup.string().required("*Campo obrigatório"),
        localidade: yup.string().required("*Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        data["id"] = ID + data.nomeGrupo + ID
        console.log(data);
        
        setGruposAlarmes([...gruposAlarmes,data])
        setOpenModalAlarm(!openModalAlarm)
    }

    return(
        <ModalGruposAlarmesStl>
            <h2 className="title_modal">
                Criar Novo Alarme
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
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            UF
                        </label>
                        <select className="campos campos_dropDown" {...register("UF")}>
                            {
                                arrEstado.map((item,i)=> <option key={i} value={item}>{item}</option>)
                            }                                
                        </select>
                    </div>
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Site
                        </label>
                        <select className="campos campos_dropDown" {...register("site")}>
                            {
                                arrSite.map((item,i)=> <option key={i} value={item}>{item}</option>)
                            }                                
                        </select>
                    </div>
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Tipo de Alarme
                        </label>
                        <select className="campos campos_dropDown" {...register("tipoAlarme")}>
                            {
                                arrTipoAlarme.map((item,i)=> <option key={i} value={item}>{item}</option>)
                            }                                
                        </select>
                    </div>
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Classificação
                        </label>
                        <select className="campos campos_dropDown" {...register("classificacao")}>
                            <option value="classificacao">...</option>                                
                        </select>
                    </div>
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Localidade
                        </label>
                        <select className="campos campos_dropDown" {...register("localidade")}>
                            <option value="localidade">...</option>                               
                        </select>
                    </div>
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Setor
                        </label>
                        <select className="campos campos_dropDown" >
                            <option value="sg_infra">SG-INFRA</option> 
                            <option value="dl_tems">DL-TEMS</option>                               
                        </select>
                    </div>
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