import { useState } from "react";
import { ModalGruposAtuacaoStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { gruposAtuacaoMock } from "../../utils/grupos";


function ModalGruposAtuacaoComponente({
    openModalGruposAtuacao, 
    setOpenModalGruposAtuacao
}){
    const [ open1, setOpen1 ] = useState(false)
    const [ open2, setOpen2 ] = useState(false)
    const [ open3, setOpen3 ] = useState(false)
    const [ open4, setOpen4 ] = useState(false)
    const [ open5, setOpen5 ] = useState(false)

    const [ ID, setID ] = useState(Math.random())

    const schema = yup.object().shape({
        nomeGrupo: yup.string().required("*Campo obrigatório"),
        RE1: yup.string(),
        nome1: yup.string(),
        contato1: yup.string(),
        cargo1: yup.string(),
        RE2: yup.string(),
        nome2: yup.string(),
        contato2: yup.string(),
        cargo2: yup.string(),
        RE3: yup.string(),
        nome3: yup.string(),
        contato3: yup.string(),
        cargo3: yup.string(),
        RE4: yup.string(),
        nome4: yup.string(),
        contato4: yup.string(),
        cargo4: yup.string(),
        RE5: yup.string(),
        nome5: yup.string(),
        contato5: yup.string(),
        cargo5: yup.string(),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        
        data["id"] = ID + data.nomeGrupo + ID
        console.log(data);
        gruposAtuacaoMock.push(data)
        
        setOpenModalGruposAtuacao(!openModalGruposAtuacao)
    }


    return (
        <ModalGruposAtuacaoStl>
            <h2 className="title">
                Criar Novo Grupo
            </h2>
            <form onSubmit={handleSubmit(formSchema)} action="" className="form_gp_atuacao">
                <div className="contCampos_nome">
                    <label htmlFor="" className="label_campos">Nome do Grupo</label>
                    <input type="text" className="campos" placeholder="Nome do grupo..." {...register("nomeGrupo")} />
                </div>
                {
                    !!open1?
                    <div className="contCampos_open">
                        <div className="line_1">
                            <label htmlFor="" className="label_campos">Contato 1</label>
                            <input type="text" className="campos" placeholder="Nome completo..."  {...register("nome1")} />                        
                        </div>
                        <div className="line_2">
                            <input type="text" className="campos campos_line2" placeholder="RE... (opcional)"  {...register("RE1")} />
                            <input type="text" className="campos campos_line2" placeholder="Número de contato..." {...register("contato1")} />
                            <select className="campos campos_line2 campos_dropDown" {...register("cargo1")} >
                                <option value="admin">Admin</option>
                                <option value="userAdm">UserAdm</option>
                                <option value="gestor">Gestor</option>
                                <option value="operador">Operador</option>                               
                            </select>                                                                        
                        </div>
                    </div>
                    :
                    <div className="contCampos">
                        <label htmlFor="" className="label_campos">Contato 1</label>
                        <input type="text" className="campos" placeholder="RE do contato..." {...register("RE1")} />
                        <button onClick={()=> setOpen1(!open1)} className="btn_manual">Inserir Manualmente</button>
                    </div>              
                }
                {
                    !!open2?
                    <div className="contCampos_open">
                        <div className="line_1">
                            <label htmlFor="" className="label_campos">Contato 2</label>
                            <input type="text" className="campos" placeholder="Nome completo..." {...register("nome2")} />                       
                        </div>
                        <div className="line_2">
                            <input type="text" className="campos campos_line2" placeholder="RE... (opcional)" {...register("RE2")} />
                            <input type="text" className="campos campos_line2" placeholder="Número de contato..." {...register("contato2")} />
                            <select className="campos campos_line2 campos_dropDown" {...register("cargo2")} >
                                <option value="admin">Admin</option>
                                <option value="userAdm">UserAdm</option>
                                <option value="gestor">Gestor</option>
                                <option value="operador">Operador</option>                               
                            </select>                         
                        </div>
                    </div>
                    :
                    <div className="contCampos">
                        <label htmlFor="" className="label_campos">Contato 2</label>
                        <input type="text" className="campos" placeholder="RE do contato..."  {...register("RE2")} />
                        <button onClick={()=> setOpen2(!open2)} className="btn_manual">Inserir Manualmente</button>
                    </div>              
                }
                {
                    !!open3?
                    <div className="contCampos_open">
                        <div className="line_1">
                            <label htmlFor="" className="label_campos">Contato 3</label>
                            <input type="text" className="campos" placeholder="Nome completo..." {...register("nome3")} />                       
                        </div>
                        <div className="line_2"> 
                            <input type="text" className="campos campos_line2" placeholder="RE... (opcional)" {...register("RE3")} />
                            <input type="text" className="campos campos_line2" placeholder="Número de contato..." {...register("contato3")} />
                            <select className="campos campos_line2 campos_dropDown" {...register("cargo3")} >
                                <option value="admin">Admin</option>
                                <option value="userAdm">UserAdm</option>
                                <option value="gestor">Gestor</option>
                                <option value="operador">Operador</option>                               
                            </select>                         
                        </div>
                    </div>
                    :
                    <div className="contCampos">
                        <label htmlFor="" className="label_campos">Contato 3</label>
                        <input type="text" className="campos" placeholder="RE do contato..." {...register("RE3")} />
                        <button onClick={()=> setOpen3(!open3)} className="btn_manual">Inserir Manualmente</button>
                    </div>              
                }
                {
                    !!open4?
                    <div className="contCampos_open">
                        <div className="line_1">
                            <label htmlFor="" className="label_campos">Contato 4</label>
                            <input type="text" className="campos" placeholder="Nome completo..." {...register("nome4")} />                       
                        </div>
                        <div className="line_2">
                            <input type="text" className="campos campos_line2" placeholder="RE... (opcional)" {...register("RE4")} />
                            <input type="text" className="campos campos_line2" placeholder="Número de contato..." {...register("contato4")} />
                            <select className="campos campos_line2 campos_dropDown" {...register("cargo4")} >
                                <option value="admin">Admin</option>
                                <option value="userAdm">UserAdm</option>
                                <option value="gestor">Gestor</option>
                                <option value="operador">Operador</option>                               
                            </select>                         
                        </div>
                    </div>
                    :
                    <div className="contCampos">
                        <label htmlFor="" className="label_campos">Contato 4</label>
                        <input type="text" className="campos" placeholder="RE do contato..." {...register("RE4")} />
                        <button onClick={()=> setOpen4(!open4)} className="btn_manual">Inserir Manualmente</button>
                    </div>              
                }
                {
                    !!open5?
                    <div className="contCampos_open">
                        <div className="line_1">
                            <label htmlFor="" className="label_campos">Contato 5</label>
                            <input type="text" className="campos" placeholder="Nome completo..." {...register("nome5")} />                        
                        </div>
                        <div className="line_2">
                            <input type="text" className="campos campos_line2" placeholder="RE... (opcional)" {...register("RE5")} />
                            <input type="text" className="campos campos_line2" placeholder="Número de contato..." {...register("contato5")} />
                            <select className="campos campos_line2 campos_dropDown" {...register("cargo5")} >
                                <option value="admin">Admin</option>
                                <option value="userAdm">UserAdm</option>
                                <option value="gestor">Gestor</option>
                                <option value="operador">Operador</option>                               
                            </select>                        
                        </div>
                    </div>
                    :
                    <div className="contCampos">
                        <label htmlFor="" className="label_campos">Contato 5</label>
                        <input type="text" className="campos" placeholder="RE do contato..." {...register("RE5")} />
                        <button onClick={()=> setOpen5(!open5)} className="btn_manual">Inserir Manualmente</button>
                    </div>              
                }
                <div className="btn_form">
                    <button onClick={()=> setOpenModalGruposAtuacao(!openModalGruposAtuacao)} className="btn fechar">Fechar</button>
                    <input className="btn salvar" type="submit" value="Salvar" />
                </div>                 
            </form>            
        </ModalGruposAtuacaoStl>
    )
}

export default ModalGruposAtuacaoComponente