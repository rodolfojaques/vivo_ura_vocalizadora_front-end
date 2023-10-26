import Header from "../../components/Header";
import { PageAdminStl } from "./styles";

import logoUra from "../../assets/logoProv.png";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user";

function PageAdmin() {
  const navigate = useNavigate();
  const { usuario } = useContext(UserContext);

  useEffect(() => {
    if (!usuario?.token) navigate("/");
  }, []);

  return (
    <PageAdminStl>
      <Header />
      <section className="sec_logo_page-admin">
        <img src={logoUra} alt="" className="logo_page-admin" />
      </section>
    </PageAdminStl>
  );
}

export default PageAdmin;
