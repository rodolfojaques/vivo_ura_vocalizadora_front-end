import { arrEstado } from "../../utils/pagListaAlarmes";
import { BackgroundStl, ModalTiposAlarmesStl } from "./styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

import { setTipoFalha, setTipoPlanta, setTipoRede, setTipoTA } from "../../utils/mocks/tems";

function ModalTiposAlarmesTemsComponente({
    openTipoAlarmeTems,
    setOpenTipoAlarmeTems,
    idGpAlarme
}){

    const {
        baseURL,
        usuario
    } = useContext(UserContext)

    const {register, handleSubmit} = useForm({})

    const formSchema = data => {
        console.log(data);
        Object.entries(data).forEach(([k,v]) => {
            if(!v) delete data[k]
        });
        console.log("depois: ",data);
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

    return(
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenTipoAlarmeTems(!openTipoAlarmeTems)}}>
            <ModalTiposAlarmesStl>
                <h2 className="title_modal">
                    Tipo de Alarme
                </h2>
                <form onSubmit={handleSubmit(formSchema)} action="" className="form_grp_alarme">
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                estadoSigla
                            </label>
                            <select  className="campos campos_dropDown" {...register("estadoSigla")}>
                                <option value={null}>{null}</option>
                                {
                                    arrEstado.map((item)=> <option key={item} value={item}>{item}</option>)
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
                    <div className="container_campos">
                        <div className="container_intern_camp">
                            <label htmlFor="" className="label_campos">
                                frontTypeTa
                            </label>
                            <select className="campos campos_dropDown" {...register("frontTypeTa")}>
                                <option value={null}>{null}</option>
                                {
                                    setTipoTA.map((item)=> <option key={item} value={item}>{item}</option>)
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
                                    setTipoPlanta.map((item)=> <option key={item} value={item}>{item}</option>)
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
                                    setTipoRede.map((item)=> <option key={item} value={item}>{item}</option>)
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
                                    setTipoFalha.map((item)=> <option key={item} value={item}>{item}</option>)
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