import { useParams } from "react-router-dom";
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
import Header from "../Header";
import { useEffect, useState } from "react";
import { api } from "../../services";
import ProductionCardAuction from "../ProductionCardAuction";
import ProductCard from "../ProductCard";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  description: string;
  dateOfBirth: Date;
  isAdvertiser: boolean;
  img: string;
  isActive: boolean;
}

interface IAnnouncement {
  id: string;
  isAuction: boolean;
  title: string;
  year: string;
  mileage: number;
  vehicleType: string;
  description: string;
  imgMain: string;
  initialBid: number;
  price: number;
  isActive: boolean;
  actualBid: number;
  isSold: boolean;
  user: IUser;
}

const AdvertiserPage = () => {
  const nav = useNavigate();

  const [auctions, setAuctions] = useState<IAnnouncement[]>([]);
  const [cars, setCars] = useState<IAnnouncement[]>([]);
  const [motorcycle, setMotorcycle] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    const getAuctions = async () => {
      await api
        .get(`/announcements/user/${userId}?isAuction=true`)
        .then((res) => {
          setAuctions(res.data);
        })
        .catch((err) => console.log(err));

      await api
        .get(
          `/announcements/user/${userId}?isAuction=false&vehicleType=motorcycle`
        )
        .then((res) => {
          setMotorcycle(res.data);
        })
        .catch((err) => console.log(err));
      await api
        .get(`/announcements/user/${userId}?isAuction=false&vehicleType=car`)
        .then((res) => {
          setCars(res.data);
        })
        .catch((err) => console.log(err));
    };
    getAuctions();
  }, []);

  const { userId } = useParams();
  return (
    <Container>
      <Header />
      <LinkBack onClick={() => nav(-1)}>
        <BiArrowBack fontSize={"20px"} color="var(--brand-1)" />
      </LinkBack>
      <UpperDiv>{userId && <ProductOwner id={userId} />}</UpperDiv>
      <BottomDiv>
        <Centered>
          <CarrAuction>
            {auctions &&
              auctions.map((auc) => {
                return <ProductionCardAuction key={auc.id} product={auc} />;
              })}
          </CarrAuction>
          <OutCarroussel>
            <Title>Carros</Title>
            <Carrossel>
              {cars &&
                cars.map((car) => {
                  return (
                    <ProductCard key={car.id} product={car} isOwner={false} />
                  );
                })}
            </Carrossel>
          </OutCarroussel>
          <OutCarroussel>
            <Title>Motos</Title>
            <Carrossel>
              {motorcycle &&
                motorcycle.map((moto) => {
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
  );
};
export default AdvertiserPage;
