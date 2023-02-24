import {Navigate, Route, Routes as RouteComponent } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AnnouncementPage from "../components/ProductPage";
import Home from "../pages/Home";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";

const Routes = () => {
  return (
    <RouteComponent>
      <Route element={<Home/>} path="/" />
      <Route element={<Login />} path="/login/" />
      <Route element={<Register />} path="/register/" />
      <Route element={<AnnouncementPage />} path="/product" />
      <Route element={<ProfileViewAdmin />} path="/admin" />
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </RouteComponent>
  );
};
export default Routes;
