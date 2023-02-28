
import {motion} from "framer-motion"
import { ContainerAuction, ContainerListCar, ContainerListMotorcycle } from "../Home/styles"
import ProductCard from "../../components/ProductCard"
import ProductionCardAuction from "../../components/ProductionCardAuction"
import Footer from "../../components/Footer"
import { useContext, useEffect, useRef, useState } from "react"
import { AnnouncementContext } from "../../context/AnnouncementContext"
import { ContainerBannerAdmin } from "./styles"
import Modal from "../../components/Modal"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import CreateAnnouncementModal from "../../components/createAnnouncementModal";
import EditAnnouncementModal from "../../components/editAnnouncementModal";
import ProductDeleteModal from "../../components/ProductDeleteModal";
import { UserContext } from "../../context/userContext"

const ProfileViewAdmin = () => {
  const {
    admCar,
    cars,
    motorcycles,
    auctions,
    admMotorcycle,
    showUserAnnouncements,
    setModal,
    modal,
  } = useContext(AnnouncementContext);
  const [width, setWidth] = useState(0);
  const {user, setLoading} = useContext(UserContext)
  const [openCreateAnnoncement, setOpenCreateAnnouncement] = useState(false);
  const [openEditAnnoncement, setOpenEditAnnouncement] = useState(false);
  const [openDeleteAnnouncement, setOpenDeleteAnnouncement] = useState(false);
  const [announcement, setAnnouncement] = useState({});

  const token = localStorage.getItem("@motorshop: token");
  const person = localStorage.getItem("@motorshop: userId");
  const navigate = useNavigate();

  const carousel = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (token) {
      showUserAnnouncements(person!);
    }
  }, []);

  return (
    <>
      {token ? (
        <>
        {token ? (
            <>
            {modal && <Modal />}
                <Header/>
            <ContainerBannerAdmin>
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
          <ContainerBannerAdmin>

            <div className="containerContentAdmin">
                <div className="content">
                <abbr title={user!.name}><img src={user?.img} alt={user?.name} /></abbr>
                <p>{user!.name} <span>{user!.isAdvertiser && "Anunciante" }</span></p>
                </div>
                <p>{user?.description}</p>
                <button onClick={() => setOpenCreateAnnouncement(true)}>  Criar anuncio
                </button>
            </div>
          </ContainerBannerAdmin>
          <ContainerAuction>
            <h4>Leilão</h4>
            <motion.ul
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              {auctions.map((auction) => {
                return (
                  <motion.li
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner"
                    key={auction.id}
                  >
                    <ProductionCardAuction product={auction} />
                  </motion.li>
                );
              })}
            </motion.ul>
          </ContainerAuction>
          <ContainerListCar>
            <h4>Carros</h4>
            <ul>
              {admCar.map((car) => {
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
              })}
            </ul>
          </ContainerListCar>
          <ContainerListMotorcycle>
            <h4>Motos</h4>
            <ul>
                {admMotorcycle.map((motorcycle)=>{
                  return(
                    <li key={motorcycle.id}><ProductCard  product={motorcycle} />
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
              })}
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
