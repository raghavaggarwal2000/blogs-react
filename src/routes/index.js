import { Route, Switch} from "react-router-dom";
import RouteConstanst from "./RouteConstants";
import Home from "../pages/Home"
import Create from "../pages/Create";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";

const AppRoutes = () =>{
    return (
        <Switch>
            <Route exact path = {RouteConstanst.HOME}  > <Home /> </Route>
            <Route exact path = {RouteConstanst.CREATE}> <Create /> </Route>
            <Route exact path = {RouteConstanst.BLOGDETAILS}> <BlogDetails /> </Route>
            <Route path = "*"> <NotFound /> </Route>
        </Switch>
    )
}

export default AppRoutes;