import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/login/index.jsx";
import PageAdmin from "../pages/admin/index.jsx";
import ListaDeAlarmes from "../pages/listaDeAlarmes/index.jsx";
import PaginaUsuarios from "../pages/usuarios/index.jsx";

function Routes(){
    return (
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/home" exact>
                <PageAdmin/>
            </Route>  
            <Route path="/lista-alarmes" exact>
                <ListaDeAlarmes />
            </Route>  
            <Route path="/usuarios" exact>
                <PaginaUsuarios />
            </Route>            
        </Switch>
    )
}

export default Routes