import {
  ContainerAuction,
  ContainerListCar,
  ContainerListMotorcycle,
} from "../Home/styles";
import ProductCard from "../../components/ProductCard";
import ProductionCardAuction from "../../components/ProductionCardAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useContext, useEffect, useRef, useState } from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import { ContainerBannerAdmin, Title } from "./styles";
import CreateAnnouncementModal from "../../components/createAnnouncementModal";
import EditAnnouncementModal from "../../components/editAnnouncementModal";
import ProductDeleteModal from "../../components/ProductDeleteModal";
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom"
import { ModalEditAddressUser, ModalEditUser } from "../../components/ModalEditUSer";

const ProfileViewAdmin = () => {
  const {
    admCar,
    auctionsUser,
    admMotorcycle,
    showUserAnnouncements,
    getAuctions,
    setModal,
    modal,
  } = useContext(AnnouncementContext);
  const [width, setWidth] = useState(0);
  const {user,openModalEditUser,setOpenModalEditUser, openModalEditAddress, setOpenModalEditAddress}= useContext(UserContext)
  
  const [openCreateAnnoncement, setOpenCreateAnnouncement] = useState(false);
  const [openEditAnnoncement, setOpenEditAnnouncement] = useState(false);
  const [openDeleteAnnouncement, setOpenDeleteAnnouncement] = useState(false);
  const [announcement, setAnnouncement] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("@motorshop: token");
  const person = localStorage.getItem("@motorshop: userId");

  const carousel = useRef<HTMLUListElement>(null);
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
          {openModalEditUser && (
            <ModalEditUser setOpenModalEditUser={setOpenModalEditUser}  />
          )}
          {openModalEditAddress && (
            <ModalEditAddressUser  setOpenModalEditAddress={setOpenModalEditAddress} />
          )}
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

          <Header />
          <ContainerBannerAdmin>
            <div className="containerContentAdmin">
              <div className="content">
                <abbr title={user!.name}>
                  <img src={user?.img} alt={user?.name} />
                </abbr>
                <p>
                  {user!.name} <span>{user!.isAdvertiser && "Anunciante"}</span>
                </p>
              </div>
              <p>{user?.description}</p>
              <button onClick={() => setOpenCreateAnnouncement(true)}>
                {" "}
                Criar anuncio
              </button>
            </div>
          </ContainerBannerAdmin>
          <ContainerAuction>
            <Title>Leilão</Title>
            <ul className="carousel" >
              {auctionsUser.map((auction) => {
                return (
                  <li className="inner" key={auction.id} >
                    <ProductionCardAuction product={auction} />
                  </li>
                );
              })}
            </ul>
          </ContainerAuction>
          <ContainerListCar>
            <Title>Carros</Title>
            <ul>
              {admCar.length === 0 ? (
                <div className="listEmpty">
                  {" "}
                  <h1>Você não possui anúncios de Carros !</h1>{" "}
                </div>
              ) : (
                admCar?.map((car) => {
                  return (
                    <li key={car.id}>
                      <ProductCard product={car} />
                      <div>
                        <button
                          onClick={() => {
                            setAnnouncement(car);
                            setOpenEditAnnouncement(true);
                          }}
                        >
                          editar
                        </button>
                        <button>ver como</button>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </ContainerListCar>
          <ContainerListMotorcycle>
            <Title>Motos</Title>
            <ul>
              {admMotorcycle.length === 0 ? (
                <div className="listEmpty">
                  {" "}
                  <h1>Você não possui anúncios de Motos !</h1>{" "}
                </div>
              ) : (
                admMotorcycle.map((motorcycle) => {
                  return (
                    <li key={motorcycle.id}>
                      <ProductCard product={motorcycle} />
                      <div>
                        <button
                          onClick={() => {
                            setAnnouncement(motorcycle);
                            setOpenEditAnnouncement(true);
                          }}
                        >
                          editar
                        </button>
                        <button>ver como</button>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </ContainerListMotorcycle>
          <Footer />
        </>
        ) : (
        navigate("/")
      )}
    </>
  );
};

export default ProfileViewAdmin;
