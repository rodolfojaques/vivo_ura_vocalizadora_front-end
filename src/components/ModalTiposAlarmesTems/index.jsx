import { arrEstado, arrSite, siglaSite, arrTipoAlarme, localidade } from "../../utils/pagListaAlarmes";
import { BackgroundStl, ModalTiposAlarmesStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

import * as UFSL from "../../utils/grupos/index"

function ModalTiposAlarmesTemsComponente({
    openTipoAlarmeTems,
    setOpenTipoAlarmeTems,
    idGpAlarme
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
        tipoPlanta: yup.string().required("*Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        axios.post(`${baseURL}/tipos-alarmes-tems/register/${idGpAlarme}`,data,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            toast.success("Tipo de Alarme adicionado com sucesso!")
            setOpenTipoAlarmeTems(!openTipoAlarmeTems)
        })
        .catch(err => console.log(err))
    }

    const handleUfChange = (event) => {
        const novoValor = event.target.value;
        if(
            novoValor === "AC" && event.target.children[0].textContent === "AC"
            ||
            novoValor === "AL" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "AM" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "AP" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "BA" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "CE" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "DF" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "ES" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "GO" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "MA" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "MG" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "MS" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "MT" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "PA" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "PB" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "PE" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "PI" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "PR" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "RJ" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "RR" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "RO" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "RN" && event.target.children[0].textContent === "AC"
            ||
            novoValor === "RS" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "SE" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "SP" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "SC" && event.target.children[0].textContent === "AC" 
            ||
            novoValor === "TO" && event.target.children[0].textContent === "AC"
        ) setUfSelect(novoValor);
    };

    return(
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenTipoAlarmeTems(!openTipoAlarmeTems)}}>
            <ModalTiposAlarmesStl>
                <h2 className="title_modal">
                    Tipo de Alarme
                </h2>
                <form onChange={handleUfChange} onSubmit={handleSubmit(formSchema)} action="" className="form_grp_alarme">
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                UF
                            </label>
                            <select  className="campos campos_dropDown" {...register("uf")}>
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
                                    ufSelect === 'AC' ?
                                    UFSL.AC_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'AL' ?
                                    UFSL.AL_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'AM' ?
                                    UFSL.AM_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'AP' ?
                                    UFSL.AP_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'BA' ?
                                    UFSL.BA_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'CE' ?
                                    UFSL.CE_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'DF' ?
                                    UFSL.DF_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'ES' ?
                                    UFSL.ES_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'GO' ?
                                    UFSL.GO_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MA' ?
                                    UFSL.MA_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MG' ?
                                    UFSL.MG_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MS' ?
                                    UFSL.MS_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MT' ?
                                    UFSL.MT_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PA' ?
                                    UFSL.PA_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PB' ?
                                    UFSL.PB_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PE' ?
                                    UFSL.PE_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PI' ?
                                    UFSL.PI_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PR' ?
                                    UFSL.PR_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RJ' ?
                                    UFSL.RJ_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RR' ?
                                    UFSL.RR_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RO' ?
                                    UFSL.RO_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RN' ?
                                    UFSL.RN_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RS' ?
                                    UFSL.RS_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'SC' ?
                                    UFSL.SC_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'SE' ?
                                    UFSL.SE_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'SP' ?
                                    UFSL.SP_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'TO' ?
                                    UFSL.TO_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
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
                                    ufSelect === 'AC' ?
                                    UFSL.AC_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'AL' ?
                                    UFSL.AL_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'AM' ?
                                    UFSL.AM_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'AP' ?
                                    UFSL.AP_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'BA' ?
                                    UFSL.BA_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'CE' ?
                                    UFSL.CE_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'DF' ?
                                    UFSL.DF_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'ES' ?
                                    UFSL.ES_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'GO' ?
                                    UFSL.GO_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MA' ?
                                    UFSL.MA_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MG' ?
                                    UFSL.MG_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MS' ?
                                    UFSL.MS_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'MT' ?
                                    UFSL.MT_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PA' ?
                                    UFSL.PA_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PB' ?
                                    UFSL.PB_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PE' ?
                                    UFSL.PE_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PI' ?
                                    UFSL.PI_site.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'PR' ?
                                    UFSL.PR_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RJ' ?
                                    UFSL.RJ_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RR' ?
                                    UFSL.RR_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RO' ?
                                    UFSL.RO_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RN' ?
                                    UFSL.RN_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'RS' ?
                                    UFSL.RS_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'SC' ?
                                    UFSL.SC_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'SE' ?
                                    UFSL.SE_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'SP' ?
                                    UFSL.SP_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }
                                {
                                    ufSelect === 'TO' ?
                                    UFSL.TO_localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    :<></>
                                }                               
                            </select>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                Tipo de Planta
                            </label>
                            <select className="campos campos_dropDown" {...register("tipoPlanta")}>
                                    <option value="SLA">SLA</option>
                                    <option value="SLA2">SLA2</option>
                                    <option value="SLA3">SLA3</option>
                                    <option value="SLA4">SLA4</option>                                
                            </select>
                        </div>
                    </div>
                    <div className="btn_form">
                        <button onClick={()=> setOpenTipoAlarmeTems(!openTipoAlarmeTems)} className="btn fechar">Fechar</button>
                        <input className="btn salvar" type="submit" value="Salvar" />
                    </div>               
                </form>
            </ModalTiposAlarmesStl>            
        </BackgroundStl>

    )
}

export default ModalTiposAlarmesTemsComponente