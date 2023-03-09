import {
  Container,
  ContainerComment,
  NameAndDate,
  Title,
  TitleDiv,
  Img,
  Description,
} from "./styles";
import { GiPlainCircle } from "react-icons/gi";
import { useEffect, useState } from "react";
import { api } from "../../../services";

const BidContent = ({ bid, announcement }: any) => {
  const now = new Date().getDate();
  const date = new Date(bid.createdAt).getDate();
  const days = now - date;
  return (
    <ContainerComment>
      <NameAndDate>
        <Img src={bid.user.img} />
        <Description color="black">{bid.user.name}</Description>
        <GiPlainCircle fontSize="6px" color="var(--grey-3)" />
        <Description color="var(--grey-3)">
          {days < 1 ? "Hoje" : `há ${days} dias`}
        </Description>
      </NameAndDate>
      <Description>
        {Number(bid.value).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </Description>
    </ContainerComment>
  );
};

export const ProductBids = ({ announcement }: any) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const getBids = async () => {
      await api
        .get(`/bids/${announcement.id}`)
        .then((res) => setBids(res.data))
        .catch((err) => console.log(err));
    };
    getBids();
  }, []);

  return (
    <Container>
      <TitleDiv>
        <Title>Lances</Title>
      </TitleDiv>
      {bids &&
        bids.map((c: any) => {
          return <BidContent announcement={announcement} key={c.id} bid={c} />;
        })}
    </Container>
  );
};
