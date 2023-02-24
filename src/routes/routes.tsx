import { Route, Routes as RouteComponent } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AnnouncementPage from "../components/ProductPage";

const Routes = () => {
  return (
    <RouteComponent>
      <Route element={<Login />} path="/login/" />
      <Route element={<Register />} path="/register/" />
      <Route element={<AnnouncementPage />} path="/product" />
    </RouteComponent>
  );
};
export default Routes;
