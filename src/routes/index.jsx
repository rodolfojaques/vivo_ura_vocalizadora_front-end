import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/login/index.jsx";

function Routes(){
    return (
        <Switch>
            <Route path="/login" exact>
                <Login/>
            </Route>
        </Switch>
    )
}

export default Routes