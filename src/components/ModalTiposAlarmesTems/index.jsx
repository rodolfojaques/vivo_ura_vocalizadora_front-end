import { arrEstado } from "../../utils/pagListaAlarmes";
import { BackgroundStl, ModalTiposAlarmesStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

import { setSpecificProblem, setTipoDeAlarme, setTipoFalha, setTipoPlanta, setTipoRede, setTipoTA } from "../../utils/mocks/tems";

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

    // const schema = yup.object().shape({
    //     estadoSigla: yup.string().required("*Campo obrigatório"),
    //     specificProblem: yup.string().required("*Campo obrigatório"),
    //     manager: yup.string().required("*Campo obrigatório"),
    //     frontTypeTa: yup.string().required("*Campo obrigatório"),
    //     // tipoDeAlarme: yup.string().required("*Campo obrigatório"),
    //     frontNetworkType: yup.string().required("*Campo obrigatório"),
    //     frontPlantType: yup.string().required("*Campo obrigatório"),
    //     frontTypeFailure: yup.string().required("*Campo obrigatório"),
    // })

    const {register, handleSubmit, formState: { errors }} = useForm({
        // resolver: yupResolver(schema)
    })

    const formSchema = data => {
        console.log(data);
        axios.post(`${baseURL}/tipos-alarmes-tems/register/${idGpAlarme}`,data,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            toast.success("Tipo de Alarme adicionado com sucesso!")
            setOpenTipoAlarmeTems(!openTipoAlarmeTems)
        })
        .catch(err => {
            console.log(err)
            toast.error("Erro ao adicionar tipo de alarme")
        })
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
                                estadoSigla
                            </label>
                            <select  className="campos campos_dropDown" {...register("estadoSigla")}>
                                <option value={null}>{null}</option>
                                {
                                    arrEstado.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                                
                            </select>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                specificProblem
                            </label>
                            <input type="text" className="campos campos_dropDown" placeholder="Ex: FALHA MONITORACAO REDE" {...register("specificProblem")}/>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                manager
                            </label>
                            <input type="text" className="campos campos_dropDown" placeholder="Ex: SMARTOSS_ATLAS" {...register("manager")}/>
                        </div>
                    </div>
                    {/* <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                tipoDeAlarme
                            </label>
                            <select className="campos campos_dropDown" {...register("tipoDeAlarme")}>
                                <option value={null}>{null}</option>
                                {
                                    setTipoDeAlarme.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                                    
                            </select>
                        </div>
                    </div> */}
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                frontTypeTa
                            </label>
                            <select className="campos campos_dropDown" {...register("frontTypeTa")}>
                                <option value={null}>{null}</option>
                                {
                                    setTipoTA.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                                    
                            </select>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                frontPlantType
                            </label>
                            <select className="campos campos_dropDown" {...register("frontPlantType")}>
                                <option value={null}>{null}</option>
                                {
                                    setTipoPlanta.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                
                            </select>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                frontNetworkType
                            </label>
                            <select className="campos campos_dropDown" {...register("frontNetworkType")}>
                                <option value={null}>{null}</option>
                                {
                                    setTipoRede.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                               
                            </select>
                        </div>
                    </div>
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                frontTypeFailure
                            </label>
                            <select className="campos campos_dropDown" {...register("frontTypeFailure")}>
                                <option value={null}>{null}</option>
                                {
                                    setTipoFalha.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                                
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