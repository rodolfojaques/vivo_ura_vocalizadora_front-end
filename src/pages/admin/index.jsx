import Header from "../../components/Header"
import { PageAdminStl } from "./styles"

import logoUra from "../../assets/logoProv.png"

function PageAdmin(){
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