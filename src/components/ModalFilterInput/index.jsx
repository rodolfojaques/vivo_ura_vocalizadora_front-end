import { useContext } from "react";
import { arrEstado } from "../../utils/pagListaAlarmes";
import { ModalFilterInputStl,BackgroundStl } from "./styles";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Icon from "react-bootstrap-icons";

function ModalFilterInput(){
    const {msFilterURL, openFilterInput, setOpenFilterInput, openExcludeFilterInput, setOpenExcludeFilterInput} = useContext(UserContext)

    const [parametros, setParametros] = useState([])
    const [atualizarParametros, setAtualizarParametros] = useState(false)
    const [dadosExclude, setDadosExclude] = useState({})

    const excludeParams = ()=>{
        axios.delete(`${msFilterURL}/filter-input/${dadosExclude?.id}`,{
            headers: {
              "Content-Type": "application/json",
            }
        })
        .then((res)=> {
            setOpenExcludeFilterInput(!openExcludeFilterInput)
            setAtualizarParametros(!atualizarParametros)
            listParam()
            toast.success("Parametro de filtragem excluído com sucesso!")
        })
        .catch((err)=> {
            console.error("erro ao excluir parametro: ",err)
            toast.error("Erro ao excluir parametro de filtragem!")
        })
    }

    const listParam = ()=> {
        axios.get(`${msFilterURL}/filter-input`,
        {
        headers: {
            "Content-Type": "application/json",
        },
        }
    )
    .then(resp=> setParametros(resp.data))
    .catch(err=> console.error(err))
    } 

    useEffect(()=>{
        listParam()
    },[atualizarParametros,openExcludeFilterInput])


    const {register, handleSubmit} = useForm({})

    const formSchema = async (data)=> {
        let newData = {}
        for(let key in data){
            if(data[key] == "Selecionar..." || data[key] == "" || data[key] == null){
                console.log("sem informações");
            } else {
                newData[key] = data[key]
            }            
        }
        
        axios.post(`${msFilterURL}/filter-input`, newData,
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        )
        .then(resp=> {
            setAtualizarParametros(!atualizarParametros)
            listParam()
            toast.success("Filtro de Entrada de Alarmes TEMS, criado com sucesso!")
            })
        .catch(err=> toast.error("Erro ao criar Filtro de Entrada de Alarmes TEMS!  -  Os campos 'familia' e 'manager' são obrigatórios!"))
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
                            <label htmlFor="" className="label-inputs">manager *</label>
                            <input type="text" className="inputs" placeholder="(Ex: U2020_HUAWEI_TAISHANCOREVIVO1)"  {...register("manager")}/>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">classificacao *</label>
                            <select name="" id="" className="inputs" {...register("classificacao")}>
                                <option value={null}>{null}</option>
                                <option value={"5-CRITICO"}>CRITICO</option>
                                <option value={"4-MAJORITARIO"}>MAJORITARIO</option>
                                <option value={"3-MINORITARIO"}>MINORITARIO</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">estadoSigla</label>
                            <select name="" id="" className="inputs" {...register("estadoSigla")}>
                                <option value={null}>{null}</option>
                                {arrEstado.map((uf)=>{
                                    return <option key={uf} value={uf}>{uf}</option>
                                })}                                
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">familia</label>
                            <input type="text" className="inputs" placeholder="(Ex: ESIGHT)" {...register("familia")}/>
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
                            parametros.map((prm)=>{
                                return <li key={prm.id} className="line-list">
                                    <p className="line-param">manager: <span className="value-param">{!!prm.manager?prm.manager:"N/D"}</span></p>
                                    <p className="line-param">classificação: <span className="value-param">{prm.classificacao?prm.classificacao:"N/D"}</span></p>
                                    <p className="line-param">estadoSigla: <span className="value-param">{!!prm.estadoSigla?prm.estadoSigla:"N/D"}</span></p>
                                    <p className="line-param">familia: <span className="value-param">{!!prm.familia?prm.familia:"N/D"}</span></p>
                                    <Icon.XCircleFill
                                    color="darkorange"
                                    className="custom-icon"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setDadosExclude(prm)
                                        setOpenExcludeFilterInput(!openExcludeFilterInput)
                                    }}
                                    />
                                    {
                                        openExcludeFilterInput && prm.id === dadosExclude.id?
                                        <div className="exclude-line">
                                            <p><b>Atenção!</b><span> - Você tem certeza que quer excluir esse parametro de filtragem?</span></p>                                            
                                            <div className="btn-exclude">
                                                <button onClick={()=> setOpenExcludeFilterInput(!openExcludeFilterInput)} className="btn fechar">cancelar</button>
                                                <button onClick={()=> excludeParams()} className="btn excluir">excluir</button>
                                            </div>
                                        </div>
                                        :<></>
                                    }
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