import FormComponent from "../../components/Form"
import ident from "../../assets/cardId.png"
import pass from "../../assets/padlokPass.png"
import logo from "../../assets/logoProv.png"

import * as Icon from "react-bootstrap-icons"

import { LoginStl } from "./styles"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Login(){

    const history = useHistory()

    const schema = yup.object().shape({
        user: yup.string().required("*Campo obrigatório"),
        password: yup.string().required("*Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        history.push('/admin')
    }

    return(
        <LoginStl>
            <img src={logo} className="logo_login" alt="" />
            <FormComponent title={"Login"} onSubmit={handleSubmit(formSchema)}>
                <form action="" className="formClass">
                    <div className="inputs">
                        <label htmlFor="" className="labelInput">
                            <figure>
                                <Icon.PersonVcardFill size={35}/>
                            </figure>                            
                        </label>
                        <div className="container_err">
                            <input type="text" className="admin" placeholder="Insira seu usuário..." {...register("user")}/>
                            {errors?.user?.message?
                            <span className="msg_error">{errors.user?.message}</span>:""}                            
                        </div>                        
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className="labelInput">
                            <figure>
                                <img src={pass} alt="" className="imgPass" />
                            </figure>                            
                        </label>                        
                        <div className="container_err">
                            <input type="password" className="password" placeholder="Insira sua senha..." {...register("password")}/>
                            {errors?.password?.message?
                            <span className="msg_error">{errors.password?.message}</span>:""}                            
                        </div>
                    </div>                    
                    <input type="submit" className="submit" value="Enter"/>
                </form>
            </FormComponent>            
        </LoginStl>

    )
}

export default Login