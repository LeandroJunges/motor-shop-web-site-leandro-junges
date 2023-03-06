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
import ProductLargeImage from "../ProductLargeImage";

const AnnouncementPage = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  // const [openImageLarge, setOpenImageLarge] = useState(false);
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
      {open1 && (
        <ProductLargeImage
          setOpenImageLarge={setOpen1}
          link={announcement!.imgs![0].link}
        />
      )}
      {open2 && (
        <ProductLargeImage
          setOpenImageLarge={setOpen2}
          link={announcement!.imgs![1].link}
        />
      )}
      {open3 && (
        <ProductLargeImage
          setOpenImageLarge={setOpen3}
          link={announcement!.imgs![2].link}
        />
      )}
      {open4 && (
        <ProductLargeImage
          setOpenImageLarge={setOpen4}
          link={announcement!.imgs![3].link}
        />
      )}
      {open5 && (
        <ProductLargeImage
          setOpenImageLarge={setOpen5}
          link={announcement!.imgs![4].link}
        />
      )}
      {open6 && (
        <ProductLargeImage
          setOpenImageLarge={setOpen6}
          link={announcement!.imgs![5].link}
        />
      )}
      <Header />
      <Main>
        <UpperMain>
          <UpperUpper>
            {announcement && <ProductDescription product={announcement} />}
          </UpperUpper>
          <UpperBottom>
            {announcement && (
              <ProductImage
                imgs={announcement!.imgs}
                setOpen1={setOpen1}
                setOpen2={setOpen2}
                setOpen3={setOpen3}
                setOpen4={setOpen4}
                setOpen5={setOpen5}
                setOpen6={setOpen6}
              />
            )}
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
