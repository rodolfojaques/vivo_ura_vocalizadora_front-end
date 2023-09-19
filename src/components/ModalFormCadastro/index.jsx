import { ModalFormCadastroStl } from "./styles";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

function ModalFormCadastro({openModal, setOpenModal}){

    const schema = yup.object().shape({
        nome: yup.string().required("*Campo obrigatório"),
        RE: yup.string().required("*Campo obrigatório"),
        email: yup.string().email("Formato de e-mail inválido").required("*Campo obrigatório"),
        tel_cel: yup.string().required("*Campo obrigatório"),
        perfil: yup.string().required("*Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        console.log(data)
    }

    return(
        <ModalFormCadastroStl>
            <h2 className="title_cadastro">
                Cadastrar Usuário
            </h2>
            <form onSubmit={handleSubmit(formSchema)} action="" className="form_cadastro">
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Nome
                        </label>
                        <input type="text" className="campos" placeholder="Nome do usuário..." {...register("nome")}/>
                    </div>
                        {errors?.nome?.message?
                            <span className="msg_error">{errors.nome?.message}</span>:""}
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            RE
                        </label>
                        <input type="text" className="campos" placeholder="RE do usuário..." {...register("RE")}/>
                    </div>
                        {errors?.RE?.message?
                            <span className="msg_error">{errors.RE?.message}</span>:""}
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            E-mail
                        </label>
                        <input type="text" className="campos" placeholder="E-mail do usuário..." {...register("email")}/>
                    </div>
                        {errors?.email?.message?
                            <span className="msg_error">{errors.email?.message}</span>:""}
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Tel/Cel
                        </label>
                        <input type="text" className="campos" placeholder="Tel/Cel do usuário..." {...register("tel_cel")}/>
                    </div>
                        {errors?.tel_cel?.message?
                            <span className="msg_error">{errors.tel_cel?.message}</span>:""}
                </div>
                <div className="container_campos">
                    <div className="container_intern_camp">
                        <label htmlFor="" className="label_campos">
                            Perfil
                        </label>
                        <input type="text" className="campos" placeholder="Perfil do usuário..." {...register("perfil")}/>
                    </div>
                        {errors?.perfil?.message?
                            <span className="msg_error">{errors.perfil?.message}</span>:""}
                </div>
                <div className="btn_form_cadastro">
                    <button onClick={()=> setOpenModal(!openModal)} className="btn fechar">Fechar</button>
                    <input className="btn salvar" type="submit" value="Salvar" />
                </div>
            </form>
        </ModalFormCadastroStl>
    )
}

export default ModalFormCadastro