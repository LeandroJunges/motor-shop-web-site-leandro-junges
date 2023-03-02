import Footer from "../../components/Footer";
import {
  ContainerAuction,
  ContainerBannerHome,
  ContainerListCar,
  ContainerListMotorcycle,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import ProductCard from "../../components/ProductCard";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { ModalEditAddressUser, ModalEditUser } from "../../components/ModalEditUSer";

const Home = () => {
  const { cars, motorcycles, auctions } = useContext(AnnouncementContext);
  const {openModalEditUser,setOpenModalEditUser, openModalEditAddress, setOpenModalEditAddress}= useContext(UserContext)
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const carousel = useRef<HTMLUListElement>(null);
  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <div>
      {openModalEditUser && (
          <ModalEditUser setOpenModalEditUser={setOpenModalEditUser}  />
      )}
      {openModalEditAddress && (
          <ModalEditAddressUser  setOpenModalEditAddress={setOpenModalEditAddress} />
      )}
      <Header />
      <ContainerBannerHome>
        <div className="containerBannerContent ">
          <h2> Velocidade e experiência em um lugar feito para você </h2>
          <span> Um ambiente feito para você explorar o seu melhor </span>
          <div className="containerButton">
            <button>Carros</button>
            <button>Motos</button>
          </div>
        </div>
      </ContainerBannerHome>
      <ContainerAuction>
        <h4>Leilão</h4>
        <ul ref={carousel} className="carousel" >
          {auctions.map((auction) => {
            return (
              <li key={auction.id} >
                <ProductionCardAuction product={auction} />
              </li>
            );
          })}
        </ul>
      </ContainerAuction>
      <ContainerListCar>
        <h4>Carros</h4>
        <ul>
          {cars.map((car) => {
            return (
              <li onClick={() => navigate(`/product/${car.id}`)} key={car.id}>
                <ProductCard product={car} />
              </li>
            );
          })}
        </ul>
      </ContainerListCar>
      <ContainerListMotorcycle>
        <h4>Motos</h4>
        <ul>
          {motorcycles.map((motorcycle) => {
            return (
              <li
                key={motorcycle.id}
                onClick={() => navigate(`/product/${motorcycle.id}`)}
              >
                <ProductCard product={motorcycle} />
              </li>
            );
          })}
        </ul>
      </ContainerListMotorcycle>
      <Footer />
    </div>
  );
};

export default Home;
