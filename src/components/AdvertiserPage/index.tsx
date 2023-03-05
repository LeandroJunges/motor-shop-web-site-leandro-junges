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
import { IAnnouncementForProductCard } from "../../interfaces";

const AdvertiserPage = () => {
  const nav = useNavigate();

  const [auctions, setAuctions] = useState<IAnnouncementForProductCard[]>([]);
  const [cars, setCars] = useState<IAnnouncementForProductCard[]>([]);
  const [motorcycle, setMotorcycle] = useState<IAnnouncementForProductCard[]>(
    []
  );

  useEffect(() => {
    const getAuctions = async () => {
      await api
        .get(`/announcements/user/${userId}?isAuction=true`)
        .then((res) => {
          setAuctions(res.data);
        })
        .catch((err) => console.error(err));

      await api
        .get(
          `/announcements/user/${userId}?isAuction=false&vehicleType=motorcycle`
        )
        .then((res) => {
          setMotorcycle(res.data);
        })
        .catch((err) => console.error(err));
      await api
        .get(`/announcements/user/${userId}?isAuction=false&vehicleType=car`)
        .then((res) => {
          setCars(res.data);
        })
        .catch((err) => console.error(err));
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
