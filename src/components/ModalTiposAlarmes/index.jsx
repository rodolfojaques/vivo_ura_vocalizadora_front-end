import { arrEstado, arrTipoAlarme } from "../../utils/pagListaAlarmes";
import { BackgroundStl, ModalTiposAlarmesStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

import * as UFSL from "../../utils/grupos/index"

const objSite = {
    "AC": UFSL.AC_site,
    "AL": UFSL.AL_site,
    "AM": UFSL.AM_site,
    "AP": UFSL.AP_site,
    "BA": UFSL.BA_site,
    "CE": UFSL.CE_site,
    "DF": UFSL.DF_site,
    "ES": UFSL.ES_site,
    "GO": UFSL.GO_site,
    "MA": UFSL.MA_site,
    "MG": UFSL.MG_site,
    "MS": UFSL.MS_site,
    "MT": UFSL.MT_site,
    "PA": UFSL.PA_site,
    "PB": UFSL.PB_site,
    "PE": UFSL.PE_site,
    "PI": UFSL.PI_site,
    "PR": UFSL.PR_site,
    "RJ": UFSL.RJ_site,
    "RR": UFSL.RR_site,
    "RO": UFSL.RO_site,
    "RN": UFSL.RN_site,
    "RS": UFSL.RS_site,
    "SC": UFSL.SC_site,
    "SE": UFSL.SE_site,
    "SP": UFSL.SP_site,
    "TO": UFSL.TO_site    
}

const objLocal = {
    "AC": UFSL.AC_localidade,
    "AL": UFSL.AL_localidade,
    "AM": UFSL.AM_localidade,
    "AP": UFSL.AP_localidade,
    "BA": UFSL.BA_localidade,
    "CE": UFSL.CE_localidade,
    "DF": UFSL.DF_localidade,
    "ES": UFSL.ES_localidade,
    "GO": UFSL.GO_localidade,
    "MA": UFSL.MA_localidade,
    "MG": UFSL.MG_localidade,
    "MS": UFSL.MS_localidade,
    "MT": UFSL.MT_localidade,
    "PA": UFSL.PA_localidade,
    "PB": UFSL.PB_localidade,
    "PE": UFSL.PE_localidade,
    "PI": UFSL.PI_localidade,
    "PR": UFSL.PR_localidade,
    "RJ": UFSL.RJ_localidade,
    "RR": UFSL.RR_localidade,
    "RO": UFSL.RO_localidade,
    "RN": UFSL.RN_localidade,
    "RS": UFSL.RS_localidade,
    "SC": UFSL.SC_localidade,
    "SE": UFSL.SE_localidade,
    "SP": UFSL.SP_localidade,
    "TO": UFSL.TO_localidade
}

function ModalTiposAlarmesInfraComponente({
    openTipoAlarme,
    setOpenTipoAlarme,
    idGpAlarme,
}){
    const [ufSelect, setUfSelect] = useState('AC')

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

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        axios.post(`${baseURL}/tipos-alarmes/register/${idGpAlarme}`,data,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            toast.success("Tipo de Alarme adicionado com sucesso!")
            setOpenTipoAlarme(!openTipoAlarme)
        })
        .catch(err => {
            console.error(err)
            toast.error("Erro ao adicionar Tipo de Alarme!")
        })
    }

    const handleUfClick = (value) => {
        setUfSelect(value)
    }

    return(
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenTipoAlarme(!openTipoAlarme)}}>
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
                            <select onClick={(e)=> handleUfClick(e.target.value)} className="campos campos_dropDown" {...register("uf")}>
                                {
                                    arrEstado.map((item)=> <option key={item} value={item}>{item}</option>)
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
                                    objSite[ufSelect].map((item)=> <option key={item} value={item}>{item}</option>)
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
                                    arrTipoAlarme.map((item)=> <option key={item} value={item}>{item}</option>)
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
                                    objLocal[ufSelect].map((item)=> <option key={item} value={item}>{item}</option>)
                                }                               
                            </select>
                        </div>
                    </div>
                    <div className="btn_form">
                        <button onClick={()=> setOpenTipoAlarme(!openTipoAlarme)} className="btn fechar">Fechar</button>
                        <input className="btn salvar" type="submit" value="Salvar" />
                    </div>               
                </form>
            </ModalTiposAlarmesStl>            
        </BackgroundStl>

    )
}

export default ModalTiposAlarmesInfraComponente