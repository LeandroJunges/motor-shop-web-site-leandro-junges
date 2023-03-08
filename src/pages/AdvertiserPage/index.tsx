import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Container,
  UpperDiv,
  BottomDiv,
  CarrAuction,
  Carrossel,
  Centered,
  OutCarroussel,
  Title,
  LinkBack,
  ContainerWpp,
} from "./styles";
import ProductOwner from "./ProductOwner";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import { BiArrowBack } from "react-icons/bi";
import { UserContext } from "../../context/userContext";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import {FaWhatsapp} from "react-icons/fa"

const AdvertiserPage = () => {
  const nav = useNavigate();

  const {userAdvertiser, getUserAdivertiser}= useContext(UserContext)
  const {admCar, admMotorcycle, getAuctions, auctionsUser, showUserAnnouncements} = useContext(AnnouncementContext)

 

  useEffect(() => {
        getAuctions(userId!);
        showUserAnnouncements(userId!)
        getUserAdivertiser(userId!)

  }, []);

  const { userId } = useParams();
  return (
    <>
    
        <>
                        
            <ContainerWpp className="animate__animated animate__pulse animate__infinite"  >
              <Link to={`https://api.whatsapp.com/send?phone=+55+${userAdvertiser?.cellphone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20da%20sua%20p%C3%A1gina%20de%20produto%2C%20gostaria%20de%20comprar%20seu%20carro%20ou%20moto`} target="_blank"  ><FaWhatsapp color="#fff" size={35} /></Link>
            </ContainerWpp>
          
            <Container>
            <Header />
            <LinkBack onClick={() => nav(-1)}>
            <BiArrowBack fontSize={"20px"} color="var(--brand-1)" />
            </LinkBack>
            <UpperDiv>{userId && <ProductOwner id={userId} />}</UpperDiv>
            <BottomDiv>
            <Centered>
            <CarrAuction>

            <Title>Leilão</Title>
            <Carrossel>
              {auctionsUser &&
                auctionsUser.map((auc) => {
                  return <ProductionCardAuction key={auc.id} product={auc} />;
              })}
            </Carrossel>
            </CarrAuction>
            <OutCarroussel>
              <Title>Carros</Title>
              <Carrossel>
              {admCar &&
                admCar.map((car) => {
                  return (
                    <ProductCard key={car.id} product={car} isOwner={false} />
                  );
                })}
              </Carrossel>
            </OutCarroussel>
            <OutCarroussel>
            <Title>Motos</Title>
              <Carrossel>
              {admMotorcycle &&
                admMotorcycle.map((moto) => {
                  return (
                    <ProductCard key={moto.id} product={moto} isOwner={false} />
                  );
                })}
              </Carrossel>
            </OutCarroussel>
            </Centered>
          </BottomDiv>
          
          <Footer />
          </Container>
        </>
      
    </>
  );
};
export default AdvertiserPage;
