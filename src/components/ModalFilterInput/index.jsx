import { useContext } from "react";
import { arrEstado } from "../../utils/pagListaAlarmes";
import { ModalFilterInputStl,BackgroundStl } from "./styles";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ModalFilterInput(){
    const {baseURL, usuario, openFilterInput, setOpenFilterInput} = useContext(UserContext)

    const [parametros, setParametros] = useState([])

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
    },[])


    return (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenFilterInput(!openFilterInput)}}>
            <ModalFilterInputStl>
                <section className="parametros-in">
                    <form action="" className="form-parametros">
                        <h2 className="title">
                            Parâmetros de Filtragem
                        </h2>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">tipoTA</label>
                            <select name="" id="" className="inputs">
                                <option value={null}>...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">estadoSigla</label>
                            <select name="" id="" className="inputs">
                                <option value={null}>...</option>
                                {arrEstado.map((uf,i)=>{
                                    return <option key={i} value={uf}>{uf}</option>
                                })}                                
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">tipoPlanta</label>
                            <select name="" id="" className="inputs">
                                <option value={null}>...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">specificProblem</label>
                            <input type="text" className="inputs" />
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">familia</label>
                            <select name="" id="" className="inputs">
                                <option value={null}>...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">tipoFalha</label>
                            <select name="" id="" className="inputs">
                                <option value={null}>...</option>
                            </select>
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">manager</label>
                            <input type="text" className="inputs" />
                        </div>
                        <div className="line-input">
                            <label htmlFor="" className="label-inputs">severity</label>
                            <select name="" id="" className="inputs">
                                <option value={null}>...</option>
                                <option value={1}>CRITICO</option>
                                <option value={2}>MAJORITARIO</option>
                                <option value={3}>MEDIO</option>
                                <option value={4}>MINORITARIO</option>
                            </select>
                        </div>
                    </form>
                </section>
                <section className="parametros-list">
                    <ul className="list-param">
                        {
                            parametros.map((prm,i)=>{
                                return <li key={i} className="line-list">
                                    <p className="line-param">tipoTA: <span className="value-param">{prm.tipoTA}</span></p>
                                    <p className="line-param">estadoSigla: <span className="value-param">{prm.estadoSigla}</span></p>
                                    <p className="line-param">tipoPlanta: <span className="value-param">{prm.tipoPlanta}</span></p>
                                    <p className="line-param">specificProblem: <span className="value-param">{prm.specificProblem}</span></p>
                                    <p className="line-param">familia: <span className="value-param">{prm.familia}</span></p>
                                    <p className="line-param">tipoFalha: <span className="value-param">{prm.tipoFalha}</span></p>
                                    <p className="line-param">manager: <span className="value-param">{prm.manager}</span></p>
                                    <p className="line-param">severity: <span className="value-param">{prm.severity}</span></p>
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