import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/login/index.jsx";
import PageAdmin from "../pages/admin/index.jsx";

function Routes(){
    return (
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/admin" exact>
                <PageAdmin/>
            </Route>            
        </Switch>
    )
}

export default Routes