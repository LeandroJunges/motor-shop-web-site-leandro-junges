import Footer from "../../components/Footer";
import {
  BottomDiv,
  CarrAuction,
  Carrossel,
  Centered,
  ContainerBannerHome,
  MainContainer,
  OutCarroussel,
  Title,
} from "./styles";
import { useContext} from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import ProductCard from "../../components/ProductCard";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";



const Home = () => {
  const { cars, motorcycles, auctions } = useContext(AnnouncementContext);
  const navigate = useNavigate();

  

  return (
    
      <MainContainer>
      <Header />
      <ContainerBannerHome>
        <div className="containerBannerContent ">
          <div className="contentText">
            <h2> Velocidade e experiência em um lugar feito para você </h2>
            <span> Um ambiente feito para você explorar o seu melhor </span>
          </div>
          <div className="containerButton">
            <a href="#listCar">Carros</a>
            <a href="#listMotorcycle">Motos</a>
          </div>
        </div>
      </ContainerBannerHome>
      <BottomDiv>
        <Centered>
          <CarrAuction>
            <Title>Leilão</Title>
            <Carrossel>
              {auctions.map((auction) => {
                return <ProductionCardAuction key={auction.id} product={auction}  />;
              })}
            </Carrossel>
          </CarrAuction>
          <OutCarroussel>
            <Title id="listCar">Carros</Title>
              <Carrossel>
                {cars.map((car) => {
                  return (
                    <ProductCard key={car.id} product={car} />
                    );
                })}
              </Carrossel>
          </OutCarroussel>
          <OutCarroussel>
            <Title id="listMotorcycle" >Motos</Title>
              <Carrossel>
                {motorcycles.map((motorcycle) => {
            return (               
                <ProductCard key={motorcycle.id} product={motorcycle} />
              );
          })}
              </Carrossel>
          </OutCarroussel>
        </Centered>
      </BottomDiv>
    <Footer />
  </MainContainer>
  );
};

export default Home;
