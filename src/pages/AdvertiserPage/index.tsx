import { useParams, useNavigate } from "react-router-dom";
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
} from "./styles";
import ProductOwner from "./ProductOwner";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import { BiArrowBack } from "react-icons/bi";
import { UserContext } from "../../context/userContext";
import { ModalEditAddressUser, ModalEditUser } from "../../components/ModalEditUSer";
import { AnnouncementContext } from "../../context/AnnouncementContext";

const AdvertiserPage = () => {
  const nav = useNavigate();

  const {openModalEditUser,setOpenModalEditUser, openModalEditAddress, setOpenModalEditAddress}= useContext(UserContext)
  const {admCar, admMotorcycle, getAuctions, auctionsUser, showUserAnnouncements} = useContext(AnnouncementContext)

  useEffect(() => {
        getAuctions(userId!);
        showUserAnnouncements(userId!)

  }, []);

  const { userId } = useParams();
  return (
    <>
    
        <>
            {openModalEditUser && (
              <ModalEditUser setOpenModalEditUser={setOpenModalEditUser}  />
            )}
            {openModalEditAddress && (
              <ModalEditAddressUser  setOpenModalEditAddress={setOpenModalEditAddress} />
              )}
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
