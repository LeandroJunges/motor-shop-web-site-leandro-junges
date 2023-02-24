import { Navigate, Route, Routes as RouteComponent } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AnnouncementPage from "../components/ProductPage";
import Home from "../pages/Home";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import ProductDeleteModal from "../components/ProductDeleteModal";
import CreateAnnouncementModal from "../components/createAnnouncementModal";
import EditAnnouncementModal from "../components/editAnnouncementModal";

const Routes = () => {
  return (
    <RouteComponent>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login/" />
      <Route element={<Register />} path="/register/" />
      <Route element={<AnnouncementPage />} path="/product" />
      <Route element={<ProfileViewAdmin />} path="/admin" />
      <Route element={<ProductDeleteModal />} path="/product-delete" />
      <Route
        element={<CreateAnnouncementModal open={true} />}
        path="/create-ann"
      />
      <Route element={<EditAnnouncementModal open={true} />} path="/edit-ann" />
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </RouteComponent>
  );
};
export default Routes;
