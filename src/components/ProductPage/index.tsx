import { useContext, useEffect } from "react";
import {
  BottomMain,
  Container,
  Main,
  SubBottomMain,
  UpperBottom,
  UpperMain,
  UpperUpper,
} from "./styles";
import ProductDescription from "./ProductDesciption";
import ProductImage from "./ProductImage";
import ProductOwner from "./ProductOwner";
import { CommentContent, ProductComments } from "./ProductComments";
import ProductCreateComment from "./ProductCreateComment";
import { api } from "../../services";
import { useState } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import Footer from "../Footer";
import { CommentsContext } from "../../context/CommentsContext";

interface IImg {
  id: string;
  link: string;
}

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
  year: number | string;
  mileage: number;
  vehicleType: string;
  description: string;
  imgMain: string;
  initialBid: number;
  price: number;
  actualBid: number;
  isSold: boolean;
  imgs: IImg[];
  user: IUser;
}
interface IComment {
  id: string;
  description: string;
}

const AnnouncementPage = () => {
  const { id } = useParams();

  const { getAnnouncement, announcement } = useContext(AnnouncementContext);
  const { announcementComments, showAnnouncementComments } =
    useContext(CommentsContext);
  useEffect(() => {
    getAnnouncement(id!);
    showAnnouncementComments(id!);
  }, []);
  return (
    <Container>
      <Header />
      <Main>
        <UpperMain>
          <UpperUpper>
            {announcement && <ProductDescription product={announcement} />}
          </UpperUpper>
          <UpperBottom>
            {announcement && <ProductImage imgs={announcement!.imgs} />}
            {announcement && <ProductOwner user={announcement!.user} />}
          </UpperBottom>
        </UpperMain>
        <BottomMain>
          <SubBottomMain>
            {announcementComments && (
              <ProductComments comments={announcementComments} />
            )}
            {announcement && (
              <ProductCreateComment announcementId={announcement.id} />
            )}
          </SubBottomMain>
        </BottomMain>
      </Main>
      <Footer />
    </Container>
  );
};

export default AnnouncementPage;
