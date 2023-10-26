import { arrEstado, arrSite, siglaSite, arrTipoAlarme, localidade } from "../../utils/pagListaAlarmes";
import { ModalTiposAlarmesStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

function ModalTiposAlarmesComponente({
    openTipoAlarme,
    setOpenTipoAlarme,
    idGpAlarme,
    gruposAlarmes,
    setGruposAlarmes
}){

    const {
        baseURL,
        usuario
    } = useContext(UserContext)

    const schema = yup.object().shape({
        uf: yup.string().required("*Campo obrigatório"),
        site: yup.string().required("*Campo obrigatório"),
        tipoAlarme: yup.string().required("*Campo obrigatório"),
        classificacao: yup.string().required("*Campo obrigatório"),
        localidade: yup.string().required("*Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        console.log(data);
        axios.post(`${baseURL}/tipos-alarmes/register/${idGpAlarme}`,data,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            toast.success("Tipo de Alarme adicionado com sucesso!")
            setOpenTipoAlarme(!openTipoAlarme)
        })
        .catch(err => console.log(err))
    }

    return(
        <ModalTiposAlarmesStl>
            <h2 className="title_modal">
                Tipo de Alarme
            </h2>
            <form onSubmit={handleSubmit(formSchema)} action="" className="form_grp_alarme">
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            UF
                        </label>
                        <select className="campos campos_dropDown" {...register("uf")}>
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
                                siglaSite.map((item,i)=> <option key={i} value={item}>{item}</option>)
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
                                <option value="MAJORITARIO">MAJORITARIO</option>
                                <option value="MINORITARIO">MINORITARIO</option>
                                <option value="CRITICO">CRITICO</option>
                                <option value="MESA DE CONTROLE">MESA DE CONTROLE</option>                                
                        </select>
                    </div>
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Localidade
                        </label>
                        <select className="campos campos_dropDown" {...register("localidade")}>
                            {
                                localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                            }                               
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
                    <button onClick={()=> setOpenTipoAlarme(!openTipoAlarme)} className="btn fechar">Fechar</button>
                    <input className="btn salvar" type="submit" value="Salvar" />
                </div>               
            </form>
        </ModalTiposAlarmesStl>
    )
}

export default ModalTiposAlarmesComponente