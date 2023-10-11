import Header from "../../components/Header"
import { PageAdminStl } from "./styles"

import logoUra from "../../assets/logoProv.png"
import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { UserContext } from "../../providers/user"

function PageAdmin(){
    const history = useHistory()
    const {usuario} = useContext(UserContext)

    useEffect(()=>{
        if(!usuario?.token) history.push("/")
    },[])

    return(
        <PageAdminStl>
            <Header />
            <section className="sec_logo_page-admin">
                <img src={logoUra} alt="" className="logo_page-admin" />
            </section>            
        </PageAdminStl>
    )
}

export default PageAdmin