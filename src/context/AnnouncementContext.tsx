import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../components/ProductCard/interface";
import { api } from "../services";

interface IAnnouncementsProviderProps {
  showCar: () => Promise<void>;
  showMotorcycle: () => Promise<void>;
  goProduct: () => void;
  showUserAnnouncements: (userId: string) => Promise<void>;
  cars: IAnnouncementsData[];
  motorcycles: IAnnouncementsData[];
  auctions: IAnnouncementsData[];
  admCar: IAnnouncementsData[];
  modal: string | null;
  setModal: React.Dispatch<React.SetStateAction<string | null>>;
}

interface IUserProps {
  children: ReactNode;
}

interface IAnnouncementsData {
  id: string;
  user: IUser;
  mileage: number;
  description: string;
  imgMain: string;
  isAution: boolean;
  price: number | undefined;
  title: string;
  vehicleType: string;
  initialBid: number | undefined;
  year: string;
  isSold: boolean | undefined;
  isActive: boolean;
}

export const AnnouncementContext = createContext(
  {} as IAnnouncementsProviderProps
);

const AnnouncementsProvider = ({ children }: IUserProps) => {
  const [cars, setCars] = useState<IAnnouncementsData[]>([]);
  const [motorcycles, setMotorcycles] = useState<IAnnouncementsData[]>([]);
  const [auctions, setAuctions] = useState<IAnnouncementsData[]>([]);
  const [admCar, setAdmCar] = useState<IAnnouncementsData[]>([]);
  const [modal, setModal] = useState<string | null>(null);
  const navigate = useNavigate();

  const showCar = async () => {
    await api
      .get("/announcements?vehicleType=car&isAuction=false")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  };
  const showMotorcycle = async () => {
    await api
      .get("/announcements?vehicleType=motorcycle&isAuction=false")
      .then((response) => {
        setMotorcycles(response.data);
      })
      .catch((error) => console.error(error));
  };

  const showAuction = async () => {
    await api
      .get("/announcements?isAuction=true")
      .then((response) => {
        setAuctions(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    showAuction();
    showCar();
    showMotorcycle();
  }, []);

  const showUserAnnouncements = async (userId: string) => {
    await api
      .get(`announcements/user/${userId}?isAuction=false&vehicleType=car`)
      .then((response) => {
        setAdmCar(response.data);
      })
      .catch((error) => console.log(error));
  };

  const goProduct = () => {
    navigate("/product");
  };

  const openModalEdit = () => {};

  return (
    <AnnouncementContext.Provider
      value={{
        showCar,
        showMotorcycle,
        cars,
        motorcycles,
        auctions,
        goProduct,
        showUserAnnouncements,
        admCar,
        modal,
        setModal,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
export default AnnouncementsProvider;
