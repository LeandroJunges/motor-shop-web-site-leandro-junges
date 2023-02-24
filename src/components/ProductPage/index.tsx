import { useEffect } from "react";
import { Container } from "./styles";
import { announcement, announcementComments, imgs } from "./mock";
import ProductDescription from "./ProductDesciption";
import ProductImage from "./ProductImage";
import ProductOwner from "./ProductOwner";
import { ProductComments } from "./ProductComments";
import ProductCreateComment from "./ProductCreateComment";

const AnnouncementPage = () => {
  useEffect(() => {
    //FAZER REQUISIÇÃO DOS COMENTÁRIOS
    //FAZER REQUISIÇÃO DAS IMAGENS
  }, []);
  return (
    <Container>
      <ProductDescription product={announcement} />
      <ProductImage imgs={imgs} />
      <ProductOwner user={announcement.user} />
      <ProductComments comments={announcementComments} />
      <ProductCreateComment user={announcement.user} />
    </Container>
  );
};

export default AnnouncementPage;
