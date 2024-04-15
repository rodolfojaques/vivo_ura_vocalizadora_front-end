import { useContext } from "react";
import { arrEstado } from "../../utils/pagListaAlarmes";
import { ModalFilterInputStl,BackgroundStl } from "./styles";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ModalFilterInput(){
    const {baseURL, usuario, openFilterInput, setOpenFilterInput} = useContext(UserContext)

    const [parametros, setParametros] = useState([])
    const [atualizarParametros, setAtualizarParametros] = useState(false)

    const listParam = ()=> {
        axios.get(`${baseURL}/filter-input`,
        {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario.token}`,
        },
        }
    )
    .then(resp=> setParametros(resp.data))
    .catch(err=> console.error(err))
    } 

    useEffect(()=>{
        listParam()
    },[atualizarParametros])


    const {register, handleSubmit, formState: { errors }} = useForm({})

    const formSchema = async (data)=> {
        let newData = {}
        for(let key in data){
            if(data[key] == "Selecionar..." || data[key] == "" || data[key] == null){
                console.log("sem informações");
            } else {
                newData[key] = data[key]
            }            
        }
        console.log(newData);
        axios.post(`${baseURL}/filter-input`, newData,
        {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario.token}`,
        },
        }
    )
    .then(resp=> {
        setAtualizarParametros(!!resp)
        toast.success("Filtro de Entrada de Alarmes TEMS, criado com sucesso!")
        })
    .catch(err=> toast.error("Erro ao criar Filtro de Entrada de Alarmes TEMS!"))
    }


    return (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenFilterInput(!openFilterInput)}}>
            <ModalFilterInputStl>
                <section className="parametros-in">
                    <form action="" className="form-parametros" onSubmit={handleSubmit(formSchema)}>
                        <h2 className="title">
                            Parâmetros de Filtragem
                        </h2>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">tipoTA</label>
                            <select name="" id="" className="inputs" {...register("tipoTA")}>
                                <option value={null}>Selecionar...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">estadoSigla</label>
                            <select name="" id="" className="inputs" {...register("estadoSigla")}>
                                <option value={null}>Selecionar...</option>
                                {arrEstado.map((uf,i)=>{
                                    return <option key={i} value={uf}>{uf}</option>
                                })}                                
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">tipoPlanta</label>
                            <select name="" id="" className="inputs" {...register("tipoPlanta")}>
                                <option value={null}>Selecionar...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">specificProblem</label>
                            <input type="text" className="inputs" placeholder="(Ex: SETOR FORA DE SERVICO)" {...register("specificProblem")}/>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">familia</label>
                            <select name="" id="" className="inputs" {...register("familia")}>
                                <option value={null}>Selecionar...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">tipoFalha</label>
                            <select name="" id="" className="inputs" {...register("tipoFalha")}>
                                <option value={null}>Selecionar...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">manager</label>
                            <input type="text" className="inputs" placeholder="(Ex: U2020_HUAWEI_TAISHANCOREVIVO1)"  {...register("manager")}/>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">severity</label>
                            <select name="" id="" className="inputs" {...register("severity")}>
                                <option value={null}>Selecionar...</option>
                                <option value={1}>CRITICO</option>
                                <option value={2}>MAJORITARIO</option>
                                <option value={3}>MEDIO</option>
                                <option value={4}>MINORITARIO</option>
                            </select>
                        </div>
                        <div className="btn_form">
                            <button onClick={()=> setOpenFilterInput(!openFilterInput)} className="btn fechar">Fechar</button>
                            <input className="btn salvar" type="submit" value="Salvar" />
                        </div>
                    </form>
                </section>
                <section className="parametros-list">
                    <ul className="list-param">
                        {
                            parametros.map((prm,i)=>{
                                return <li key={i} className="line-list">
                                    <p className="line-param">tipoTA: <span className="value-param">{!!prm.tipoTA?prm.tipoTA:"N/D"}</span></p>
                                    <p className="line-param">estadoSigla: <span className="value-param">{!!prm.estadoSigla?prm.estadoSigla:"N/D"}</span></p>
                                    <p className="line-param">tipoPlanta: <span className="value-param">{!!prm.tipoPlanta?prm.tipoPlanta:"N/D"}</span></p>
                                    <p className="line-param">specificProblem: <span className="value-param">{!!prm.specificProblem?prm.specificProblem:"N/D"}</span></p>
                                    <p className="line-param">familia: <span className="value-param">{!!prm.familia?prm.familia:"N/D"}</span></p>
                                    <p className="line-param">tipoFalha: <span className="value-param">{!!prm.tipoFalha?prm.tipoFalha:"N/D"}</span></p>
                                    <p className="line-param">manager: <span className="value-param">{!!prm.manager?prm.manager:"N/D"}</span></p>
                                    <p className="line-param">severity: <span className="value-param">{prm.severity?prm.severity:"N/D"}</span></p>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </ModalFilterInputStl>
        </BackgroundStl>
    )
}

export default ModalFilterInput