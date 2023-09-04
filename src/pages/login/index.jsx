import FormComponent from "../../components/Form"
import ident from "../../assets/cardId.png"
import pass from "../../assets/padlok.png"
import logo from "../../assets/logoProv.png"

import { LoginStl } from "./styles"

function Login(){
    return(
        <LoginStl>
            <img src={logo} className="logo_login" alt="" />
            <FormComponent title={"Login"} >
                <form action="" className="formClass">
                    <div className="inputs">
                        <label htmlFor="" className="labelInput">
                            <figure>
                                <img src={ident} alt="" className="imgId" />
                            </figure>                            
                        </label>
                        <input type="text" className="admin" placeholder="Insira seu usuário..."/>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className="labelInput">
                            <figure>
                                <img src={pass} alt="" className="imgPass" />
                            </figure>                            
                        </label>
                        <input type="text" className="password" placeholder="Insira sua senha..."/>
                    </div>
                    <input type="submit" className="submit" value="Enter"/>
                </form>
            </FormComponent>            
        </LoginStl>

    )
}

export default Login