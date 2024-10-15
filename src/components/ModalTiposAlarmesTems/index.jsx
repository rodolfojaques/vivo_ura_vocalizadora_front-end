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
                    <div className="flex-row">
                        <div className="div-flex">
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
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: Plataforma" {...register("frontTypeTa")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontPlantType
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: Movel" {...register("frontPlantType")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontNetworkType
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: SERVICO_DE_INTERNET" {...register("frontNetworkType")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontTypeFailure
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: Equipment Alarm" {...register("frontTypeFailure")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        familia
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: ESIGHT" {...register("familia")}/>
                                </div>
                            </div>                            
                        </div>
                        <div className="div-flex">
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        node
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: RJBAR_V04HUA_BLD14" {...register("node")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        identifier
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: V04HUA_BLD_12289_RJ..." {...register("identifier")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontNodeReference
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: SPCTP-V40HPP-SVT201-01" {...register("frontNodeReference")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontDomain
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: Sistema Gerencia" {...register("frontDomain")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontElementType
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: SMARTOSS_ATLAS" {...register("frontElementType")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontScriptProbe
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: SMARTOSSGenericProc.groovy" {...register("frontScriptProbe")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontAlarmId
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: CEPH_OSD_LATENCY" {...register("frontAlarmId")}/>
                                </div>
                            </div>
                            <div className="container_campos">
                                <div className="container_intern_camp">
                                    <label htmlFor="" className="label_campos">
                                        frontPodName
                                    </label>
                                    <input type="text" className="campos campos_dropDown" placeholder="Ex: SMARTOSS_ATLAS" {...register("frontPodName")}/>
                                </div>
                            </div>
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