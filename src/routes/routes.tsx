import { Route, Routes as RouteComponent } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
    return(
        <RouteComponent>
            <Route element={<Home/>} path="/" />
            <Route element={<Login/>} path="/login/"/>
            <Route element={<Register/>} path="/register/"/>
        </RouteComponent>
    )
}
export default Routes


