import { Route, BrowserRouter as Routes } from "react-router-dom";
import RouteConstanst from "./RouteConstants";
import Home from "../pages/Home"

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path = {RouteConstanst.HOME} element = {<Home /> } />
        </Routes>
    )
}

export default AppRoutes;