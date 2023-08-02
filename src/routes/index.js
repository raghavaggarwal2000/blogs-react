import { Route, Switch} from "react-router-dom";
import RouteConstanst from "./RouteConstants";
import Home from "../pages/Home"

const AppRoutes = () =>{
    return (
        <Switch>
            <Route path = {RouteConstanst.HOME}  ><Home /> </Route>
        </Switch>
    )
}

export default AppRoutes;