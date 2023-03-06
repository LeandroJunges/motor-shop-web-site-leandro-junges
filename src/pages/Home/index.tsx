import Footer from "../../components/Footer";
import {
  ContainerAuction,
  ContainerBannerHome,
  ContainerListCar,
  ContainerListMotorcycle,
  Title,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import ProductCard from "../../components/ProductCard";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import {
  ModalEditAddressUser,
  ModalEditUser,
} from "../../components/ModalEditUSer";

const Home = () => {
  const { cars, motorcycles, auctions } = useContext(AnnouncementContext);
  const {
    openModalEditUser,
    setOpenModalEditUser,
    openModalEditAddress,
    setOpenModalEditAddress,
  } = useContext(UserContext);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const carousel = useRef<HTMLUListElement>(null);
  

  return (
    <div className="ContainerHomeGenneral">
      {openModalEditUser && (
        <ModalEditUser setOpenModalEditUser={setOpenModalEditUser} />
      )}
      {openModalEditAddress && (
        <ModalEditAddressUser
          setOpenModalEditAddress={setOpenModalEditAddress}
        />
      )}
      <Header />
      <ContainerBannerHome>
        <div className="containerBannerContent ">
          <h2> Velocidade e experiência em um lugar feito para você </h2>
          <span> Um ambiente feito para você explorar o seu melhor </span>
          <div className="containerButton">
            <a href="#listCar">Carros</a>
            <a href="#listMotorcycle">Motos</a>
          </div>
        </div>
      </ContainerBannerHome>
      <ContainerAuction id="auction">
        <Title>Leilão</Title>
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
      <ContainerListCar id="listCar">
        <Title>Carros</Title>
        <ul>
          {cars.map((car) => {
            return (
              <li key={car.id}>
                <ProductCard product={car} />
              </li>
            );
          })}
        </ul>
      </ContainerListCar>
      <ContainerListMotorcycle id="listMotorcycle">
        <Title>Motos</Title>
        <ul>
          {motorcycles.map((motorcycle) => {
            return (
              <li key={motorcycle.id}>
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
