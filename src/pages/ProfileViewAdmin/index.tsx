
import ProductCard from "../../components/ProductCard";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import { BottomDiv, CarrAuction, Carrossel, Centered, ContainerButtons, ContainerCarroussel, LinkBack, MainContainer, OutCarroussel, Title, UpperDiv } from "./styles";
import CreateAnnouncementModal from "../../components/createAnnouncementModal";
import EditAnnouncementModal from "../../components/editAnnouncementModal";
import ProductDeleteModal from "../../components/ProductDeleteModal";
import { useNavigate } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import ProfileOwner from "./ProfileOwner";


const ProfileViewAdmin = () => {
  const {
    admCar,
    auctionsUser,
    admMotorcycle,
    showUserAnnouncements,
    getAuctions,
    
  } = useContext(AnnouncementContext);
  
  const [openCreateAnnoncement, setOpenCreateAnnouncement] = useState(false);
  const [openEditAnnoncement, setOpenEditAnnouncement] = useState(false);
  const [openDeleteAnnouncement, setOpenDeleteAnnouncement] = useState(false);
  const [announcement, setAnnouncement] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("@motorshop: token");
  const person = localStorage.getItem("@motorshop: userId");

  useEffect(() => {
    if (token) {
      showUserAnnouncements(person!);
      getAuctions(person!)
    }
  }, []);

  

  return (
    <>
      {token ? (
        <>
          
          {openCreateAnnoncement && (
            <CreateAnnouncementModal
              setOpenCreateAnnouncement={setOpenCreateAnnouncement}
            />
          )}
          {openEditAnnoncement && (
            <EditAnnouncementModal
              setOpenDeleteAnnouncement={setOpenDeleteAnnouncement}
              setAnnouncement={setAnnouncement}
              announce={announcement}
              setOpenEditAnnouncement={setOpenEditAnnouncement}
            />
          )}
          {openDeleteAnnouncement && (
            <ProductDeleteModal
              announcement={announcement}
              setOpenDeleteAnnouncement={setOpenDeleteAnnouncement}
            />
          )}
            <MainContainer>

            <Header />

            <LinkBack onClick={() => navigate(-1)}>
            <BiArrowBack fontSize={"20px"} color="var(--brand-1)" />
            </LinkBack>
            <UpperDiv>{person! && <ProfileOwner id={person} />}</UpperDiv>
            <BottomDiv>
              <Centered>
                <CarrAuction>

                  <Title>Leilão</Title>
                  <Carrossel>

                  {auctionsUser.length === 0? (
                    <>
                      <div className="listEmpty">
                        <h1>Você não possui anúncios de Leilões!</h1>
                    
                      </div>
                    </>
                    ):(
                      auctionsUser.map((auction) => {
                        return (                         
                            <ProductionCardAuction  key={auction.id} product={auction} />
                         )}
                      ))}
                  </Carrossel>
                </CarrAuction>
                <OutCarroussel>
                  <Title>Carros</Title>
                  <Carrossel>
                  {admCar.length === 0 ? (
                  <div className="listEmpty">
                    {" "}
                    <h1>Você não possui anúncios de Carros !</h1>{" "}
                  </div>
                ) : (
                  admCar?.map((car) => {
                    return (
                          <ContainerCarroussel key={car.id} >
                            <ProductCard  product={car} />
                            <ContainerButtons>
                                <button
                                  onClick={() => {
                                    setAnnouncement(car);
                                    setOpenEditAnnouncement(true);
                                    }}>editar </button>
                                <button>ver como</button>
                            </ContainerButtons>
                         </ContainerCarroussel>
                      
                        );
                      })
                    )}
                  </Carrossel>
                </OutCarroussel>
                <OutCarroussel>
                  <Title>Motos</Title>
                  <Carrossel>
                  {admMotorcycle.length === 0 ? (
                  <div className="listEmpty">
                    {" "}
                    <h1>Você não possui anúncios de Motos !</h1>{" "}
                  </div>
                )   :   (
                  admMotorcycle.map((motorcycle) => {
                    return (
                      <ContainerCarroussel key={motorcycle.id} >
                        <ProductCard  product={motorcycle} />
                        <ContainerButtons>
                            <button
                              onClick={() => {
                              setAnnouncement(motorcycle);
                              setOpenEditAnnouncement(true);
                              }}> editar </button>
                            <button>ver como</button>
                        </ContainerButtons>
                      </ContainerCarroussel>
                      
                    );
                  })
                )}
                  </Carrossel>
                  
                </OutCarroussel>
              </Centered>
            </BottomDiv>
          <Footer />
          </MainContainer>
        </>
        ) : (
        navigate("/")
      )}
    </>
  );
};

export default ProfileViewAdmin;
