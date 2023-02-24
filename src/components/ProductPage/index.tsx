import { useEffect } from "react";
import { Container } from "./styles";
import { announcement, announcementComments, imgs } from "./mock";
import ProductDescription from "./ProductDesciption";
import ProductImage from "./ProductImage";
import ProductOwner from "./ProductOwner";
import { ProductComments } from "./ProductComments";
import ProductCreateComment from "./ProductCreateComment";
import { api } from "../../services";
import { useState } from "react";
import Header from "../Header";

const AnnouncementPage = (/*{ announcement }: any*/) => {
  const [comments, setComments] = useState([]);
  const [images, setImages] = useState([]);
  // useEffect(() => {
  //   api
  //     .get(`/comments/${announcement.id}`)
  //     .then((res) => {
  //       setComments(res.data);
  //     })
  //     .catch((res) => console.log(res));

  //   api
  //     .get(`/announcements/${announcement.id}`)
  //     .then((res) => {
  //       setImages(res.data.imgs);
  //     })
  //     .catch((res) => console.log(res));
  // }, []);
  return (
    <Container>
      <Header />
      <ProductDescription product={announcement} />
      <ProductImage imgs={imgs} />
      <ProductOwner user={announcement.user} />
      <ProductComments comments={announcementComments} />
      <ProductCreateComment user={announcement.user} />
    </Container>
  );
};

export default AnnouncementPage;
