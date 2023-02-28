import { Navigate, Route, Routes as RouteComponent } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AnnouncementPage from "../components/ProductPage";
import Home from "../pages/Home";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import ProductDeleteModal from "../components/ProductDeleteModal";
import ProtectRoute from "../components/ProtectRoute";
import PasswordChange from "../pages/PasswordChange";

const Routes = () => {
  return (
    <RouteComponent>
      <Route element={<Home />} path="/" />
      <Route element={<AnnouncementPage />} path="/product/:id" />
      <Route element={<Login />} path="/login/" />
      <Route element={<Register />} path="/register/" />
      <Route element={<PasswordChange />} path="/recovery/:token" />
      <Route element={<ProtectRoute /> }>
          <Route element={<ProfileViewAdmin />} path="/admin" />
      </Route>
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </RouteComponent>
  );
};
export default Routes;
